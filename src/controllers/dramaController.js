const dramaModel = require("../models/dramaModel");

const getAllDramas = async (req, res) => {
    try {
        const dramas = await dramaModel.getAllDramas();
        res.json(dramas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createDrama = async (req, res) => {
    const { titulo, descricao, genero, ano_lancamento, pais_origem, classificacao } = req.body;
    try {
        const id = await dramaModel.createDrama(titulo, descricao, genero, ano_lancamento, pais_origem, classificacao);
        res.status(201).json({ message: 'Drama criado!', id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllDramas,
    createDrama,
};
