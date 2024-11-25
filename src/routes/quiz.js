const express = require('express');
const quizController = require('../controllers/quizController');

const router = express.Router();

// Rota para salvar as respostas do quiz
router.post('/save-answers', quizController.saveQuizAnswers);

module.exports = router;
