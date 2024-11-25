function submitQuizAnswers() {
    const quizData = [
      // Um exemplo de como os dados poderiam ser estruturados
      { question: 'Qual dorama é este?', answer: 'Vincenzo', isCorrect: true },
      { question: 'Qual dorama é este?', answer: 'Hospital Playlist', isCorrect: false },
      // ...
    ];
  
    const userId = 1; // ID do usuário que respondeu ao quiz
  
    fetch('http://localhost:3000/api/quiz/save-answers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, quizData })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Respostas salvas com sucesso:', data);
    })
    .catch(error => {
      console.error('Erro ao salvar as respostas:', error);
    });
  }
  