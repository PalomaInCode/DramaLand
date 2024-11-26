const db = require("../database/config");

// Função para salvar as respostas do quiz no banco de dados
const saveQuizResult = (userId, quizData) => {
  const query = `
    INSERT INTO quiz_results (user_id, question, answer, is_correct)
    VALUES ?;
  `;
  
  const values = quizData.map(item => [userId, item.question, item.answer, item.isCorrect]);
  
  return new Promise((resolve, reject) => {
    db.query(query, [values], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = { saveQuizResult };