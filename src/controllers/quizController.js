const quizModel = require('../models/quizModel');

// Função para salvar o resultado do quiz
const saveQuizAnswers = async (req, res) => {
  const { userId, quizData } = req.body; // Espera-se que o corpo da requisição tenha 'userId' e 'quizData'

  try {
    await quizModel.saveQuizResult(userId, quizData);
    res.status(200).json({ message: 'Respostas salvas com sucesso!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao salvar as respostas.' });
  }
};

module.exports = { saveQuizAnswers };
