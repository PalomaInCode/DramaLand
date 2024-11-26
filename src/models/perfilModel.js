var database = require("../database/config");

// Função para buscar o perfil de um usuário
function buscarPorIdUsuario(idUsuario) {
    console.log("Buscando perfil do usuário com ID:", idUsuario);

    var instrucaoSql = `
        SELECT id, id_usuario, ultimo_drama, favoritos, generos, assistidos
        FROM perfil
        WHERE id_usuario = ?;
    `;
    
    return database.executar(instrucaoSql, [idUsuario]);
}

// Função para atualizar o perfil do usuário
function atualizarPerfil(idUsuario, ultimoDrama, favoritos, generos, assistidos) {
    console.log("Atualizando perfil do usuário com ID:", idUsuario);

    var instrucaoSql = `
        UPDATE perfil
        SET ultimo_drama = ?, favoritos = ?, generos = ?, assistidos = ?
        WHERE id_usuario = ?;
    `;
    
    return database.executar(instrucaoSql, [ultimoDrama, favoritos, generos, assistidos, idUsuario]);
}

// Função para cadastrar o perfil de um novo usuário
function cadastrarPerfil(idUsuario, ultimoDrama, favoritos, generos, assistidos) {
    console.log("Cadastrando perfil para o usuário com ID:", idUsuario);

    var instrucaoSql = `
        INSERT INTO perfil (id_usuario, ultimo_drama, favoritos, generos, assistidos)
        VALUES (?, ?, ?, ?, ?);
    `;
    
    return database.executar(instrucaoSql, [idUsuario, ultimoDrama, favoritos, generos, assistidos]);
}

module.exports = {
    buscarPorIdUsuario,
    atualizarPerfil,
    cadastrarPerfil
};
