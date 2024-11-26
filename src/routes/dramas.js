var express = require("express");
var router = express.Router();

var dramaController = require("../controllers/dramaController");

// Rota para listar todos os dramas
router.get("/", function (req, res) {
    dramaController.listarDramas(req, res);
});

// Rota para cadastrar um drama
router.post("/cadastrar", function (req, res) {
    dramaController.cadastrarDrama(req, res);
});

// Rota para atualizar um drama
router.post("/atualizar", function (req, res) {
    dramaController.atualizarDrama(req, res);
});

module.exports = router;
