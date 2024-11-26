var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

// Rota para listar todas as perguntas de quiz
router.get("/", function (req, res) {
    quizController.listarPerguntas(req, res);
});

// Rota para responder ao quiz
router.post("/responder", function (req, res) {
    quizController.responderQuiz(req, res);
});

// Rota para verificar as respostas do quiz
router.post("/verificar", function (req, res) {
    quizController.verificarRespostas(req, res);
});

module.exports = router;
