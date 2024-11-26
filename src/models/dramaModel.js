const pool = require("../database/config");

const getAllDramas = async () => {
    const [dramas] = await pool.query('SELECT * FROM dramas');
    return dramas;
};

const createDrama = async (titulo, descricao, genero, ano_lancamento, pais_origem, classificacao) => {
    const [result] = await pool.query(
        'INSERT INTO dramas (titulo, descricao, genero, ano_lancamento, pais_origem, classificacao) VALUES (?, ?, ?, ?, ?, ?)',
        [titulo, descricao, genero, ano_lancamento, pais_origem, classificacao]
    );
    return result.insertId;
};

module.exports = {
    getAllDramas,
    createDrama,
};
