require('dotenv').config();
var mysql = require("mysql2");

// Configuração do pool de conexões
var pool = mysql.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,  // Defina o limite conforme necessário
    queueLimit: 0
});

// Função de execução com suporte a parâmetros
function executar(instrucao, parametros = []) {
    if (process.env.AMBIENTE_PROCESSO !== "producao" && process.env.AMBIENTE_PROCESSO !== "desenvolvimento") {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM .env OU dev.env OU app.js\n");
        return Promise.reject("AMBIENTE NÃO CONFIGURADO EM .env");
    }

    return new Promise(function (resolve, reject) {
        pool.query(instrucao, parametros, function (erro, resultados) {
            if (erro) {
                console.error("Erro na execução da query:", erro);
                reject(erro);
            } else {
                console.log("Resultado da query:", resultados);
                resolve(resultados);
            }
        });
    });
}

module.exports = {
    executar
};
