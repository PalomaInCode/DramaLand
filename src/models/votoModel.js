var database = require("../database/config");

function atualizarVoto(nomeDorama) {
  var instrucaoSql = `
        UPDATE votos
        SET quantidade = quantidade + 1
        WHERE dorama = '${nomeDorama}'
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarVotos() {
  var instrucaoSql = `SELECT quantidade FROM votos`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  atualizarVoto,
  buscarVotos,
};
