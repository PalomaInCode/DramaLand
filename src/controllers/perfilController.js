var Perfil = require("../models/perfilModel"); // Exemplo de modelo

module.exports = {
    // Função para pegar o perfil
    getPerfil: function (req, res) {
        // Lógica para pegar perfil
        Perfil.find({}, function (err, perfil) {
            if (err) {
                return res.status(500).json({ message: "Erro ao buscar perfil" });
            }
            res.json(perfil);
        });
    },

    // Função para atualizar o perfil
    atualizarPerfil: function (req, res) {
        var dadosPerfil = req.body;
        Perfil.updateOne({ _id: dadosPerfil.id }, dadosPerfil, function (err, result) {
            if (err) {
                return res.status(500).json({ message: "Erro ao atualizar perfil" });
            }
            res.json({ message: "Perfil atualizado com sucesso!" });
        });
    },

    // Função para adicionar um drama ao perfil
    adicionarDrama: function (req, res) {
        var dados = req.body;
        Perfil.updateOne({ _id: dados.id }, { $push: { assistidos: dados.drama } }, function (err, result) {
            if (err) {
                return res.status(500).json({ message: "Erro ao adicionar drama" });
            }
            res.json({ message: "Drama adicionado com sucesso!" });
        });
    }
};
