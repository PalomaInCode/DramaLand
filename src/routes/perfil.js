var express = require("express");
var router = express.Router();
var perfilController = require("../controllers/perfilController");

// Exemplo de rota para obter o perfil
router.get("/", function (req, res) {
    perfilController.getPerfil(req, res);
});

// Exemplo de rota para atualizar o perfil
router.post("/atualizar", function (req, res) {
    perfilController.atualizarPerfil(req, res);
});

// Exemplo de rota para adicionar um drama ao perfil
router.post("/adicionar-drama", function (req, res) {
    perfilController.adicionarDrama(req, res);
});

module.exports = router;
