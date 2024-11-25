const quizData = [
  {
    question: '1. Em qual dorama o protagonista se envolve em atividades criminosas para proteger sua vida?',
    options: ['Extracurricular', 'My Name', 'Class of Lies', 'The Good Detective'],
    answer: 'Extracurricular',
  },
  {
    question: '2. Em qual dorama o personagem investiga sua vida após perder a memória?',
    options: ['Psychopath Diary', 'The Glory', 'My Name', 'Love Alarm'],
    answer: 'Psychopath Diary',
  },
  {
    question: '3. Qual dorama trata de uma mãe tentando proteger seu filho após um evento traumático?',
    options: ['Beautiful World', 'Hospital Playlist', 'The King: Eternal Monarch', 'What’s Wrong With Secretary Kim'],
    answer: 'Beautiful World',
  },
  {
    question: '4. Em qual dorama um aplicativo faz os usuários se apaixonarem?',
    options: ['Love Alarm', 'Strong Girl Bong-soon', 'Cheese in the Trap', 'I Hear You'],
    answer: 'Love Alarm',
  },
  {
    question: '5. Qual dorama mostra uma jovem tentando superar inseguranças e ser bonita?',
    options: ['True Beauty', 'My ID is Gangnam Beauty', 'The World Owes Me A First Love', 'What’s Wrong With Secretary Kim'],
    answer: 'True Beauty',
  },
  {
    question: '6. Qual dorama envolve vingança e mistério?',
    options: ['The Glory', 'Revolutionary Love', 'Goblin', 'Mystic Pop-up Bar'],
    answer: 'The Glory',
  },
  {
    question: '7. Em qual dorama o protagonista tem transtorno mental e romance complicado?',
    options: ['Tudo Bem Não Ser Normal', 'Dr. Romantic 2', 'I Hear You', 'The Good Detective'],
    answer: 'Tudo Bem Não Ser Normal',
  },
  {
    question: '8. Em qual dorama o protagonista lida com um mistério relacionado a crimes e romance?',
    options: ['Flower of Evil', 'My Secret Romance', 'Love Alarm', 'The World Owes Me A First Love'],
    answer: 'Flower of Evil',
  },
  {
    question: '9. Em qual dorama um grupo participa de um jogo de sobrevivência mortal?',
    options: ['Round 6', 'Catch the Ghost', 'Mystic Pop-up Bar', 'The Tale of Nokdu'],
    answer: 'Round 6',
  },
  {
    question: '10. Em qual dorama uma mulher se reencarna e se casa com o homem que a matou?',
    options: ['Marry My Husband', 'Round 6', 'Catch the Ghost', 'Leverage'],
    answer: 'Marry My Husband',
  },
];
  const quizContainer = document.getElementById('quiz');
  const resultContainer = document.getElementById('result');
  const submitButton = document.getElementById('submit');
  const retryButton = document.getElementById('retry');
  const showAnswerButton = document.getElementById('showAnswer');
  
  let currentQuestion = 0;
  let score = 0;
  let incorrectAnswers = [];
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function displayQuestion() {
    const questionData = quizData[currentQuestion];
  
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;
  
    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';
  
    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);
  
    for (let i = 0; i < shuffledOptions.length; i++) {
      const option = document.createElement('label');
      option.className = 'option';
  
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quiz';
      radio.value = shuffledOptions[i];
  
      const optionText = document.createTextNode(shuffledOptions[i]);
  
      option.appendChild(radio);
      option.appendChild(optionText);
      optionsElement.appendChild(option);
    }
  
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === quizData[currentQuestion].answer) {
        score++;
      } else {
        incorrectAnswers.push({
          question: quizData[currentQuestion].question,
          incorrectAnswer: answer,
          correctAnswer: quizData[currentQuestion].answer,
        });
      }
      currentQuestion++;
      selectedOption.checked = false;
      if (currentQuestion < quizData.length) {
        displayQuestion();
      } else {
        displayResult();
      }
    }
  }
  
  function displayResult() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    resultContainer.innerHTML = `Você acertou ${score} de ${quizData.length}!`;
  }
  
  function retryQuiz() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    quizContainer.style.display = 'block';
    submitButton.style.display = 'inline-block';
    retryButton.style.display = 'none';

    resultContainer.innerHTML = '';
    displayQuestion();
  }
  
  function showAnswer() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
  
    let incorrectAnswersHtml = '';
    for (let i = 0; i < incorrectAnswers.length; i++) {
      incorrectAnswersHtml += `
        <p>
          <strong>Pergunta:</strong> ${incorrectAnswers[i].question}<br>
          <strong>Sua Resposta:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
        </p>
      `;
    }
  
    resultContainer.innerHTML = `
      <p>Você acertou ${score} de ${quizData.length}!</p>
      <p>Respostas Incorretas:</p>
      ${incorrectAnswersHtml}
    `;
  }
  
  submitButton.addEventListener('click', checkAnswer);
  retryButton.addEventListener('click', retryQuiz);
  
  displayQuestion();
  // Seleciona todas as opções
const options = document.querySelectorAll('.option');

// Adiciona um evento de clique para cada uma
options.forEach(option => {
  option.addEventListener('click', function() {
    // Remove a classe 'selected' de todas as opções
    options.forEach(opt => opt.classList.remove('selected'));

    // Adiciona a classe 'selected' à opção clicada
    option.classList.add('selected');
  });
});

function displayResult() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    
    // Calcula a porcentagem de acertos
    const percentage = (score / quizData.length) * 100;

    // Exibe o texto com a porcentagem de acertos
    resultContainer.innerHTML = `
      <p>Você acertou ${score} de ${quizData.length}!</p>
      <p><strong>Porcentagem de acertos:</strong> ${percentage.toFixed(2)}%</p>
    `;

    // Cria o gráfico
    const ctx = document.createElement('canvas');
    resultContainer.appendChild(ctx);

    const myChart = new Chart(ctx, {
      type: 'doughnut', // Tipo de gráfico circular (rosca)
      data: {
        labels: ['Acertos', 'Erros'], // Rótulos para os segmentos
        datasets: [{
          data: [percentage, 100 - percentage], // Dados do gráfico
          backgroundColor: ['#ff61a560', '#ddd'], // Cores dos segmentos
          hoverBackgroundColor: ['#ff61a6', '#ccc'], // Cores ao passar o mouse
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false, // Esconde a legenda
          },
          tooltip: {
            callbacks: {
              label: function(tooltipItem) {
                return tooltipItem.raw.toFixed(2) + '%'; // Exibe a porcentagem no tooltip
              }
            }
          }
        },
        animation: {
          duration: 2000, // Tempo da animação em milissegundos
          easing: 'easeOutBounce', // Efeito de animação
        }
      }
    });
}

  