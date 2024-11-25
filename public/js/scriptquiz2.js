const quizData = [
  {
    question: '1. Qual dorama é este?',
    image: 'assets/acao.png', // Substitua pela URL da imagem
    options: ['Vincenzo', 'Itaewon Class', 'My Lawyer, Mr. Jo', 'Law School'],
    answer: 'Law School',
  },
  {
    question: '2. Qual dorama é este?',
    image: 'assets/acao.png', // Substitua pela URL da imagem
    options: ['Hospital Playlist', 'Doctors', 'Good Doctor', 'Medical Top Team'],
    answer: 'Hospital Playlist',
  },
  {
    question: '3. Qual dorama é este?',
    image: 'assets/acao.png', // Substitua pela URL da imagem
    options: ['Dream High', 'You’re Beautiful', 'Boys Over Flowers', 'Heartstrings'],
    answer: 'Dream High',
  },
  {
    question: '4. Qual dorama é este?',
    image: 'assets/acao.png', // Substitua pela URL da imagem
    options: ['The King: Eternal Monarch', 'Moon Lovers', 'Goblin', 'My Love from the Star'],
    answer: 'Moon Lovers',
  },
  {
    question: '5. Qual dorama é este?',
    image: 'assets/acao.png', // Substitua pela URL da imagem
    options: ['Start-Up', 'Sisyphus: The Myth', 'Vincenzo', 'What’s Wrong with Secretary Kim'],
    answer: 'Start-Up',
  },
  {
    question: '6. Qual dorama é este?',
    image: 'assets/acao.png', // Substitua pela URL da imagem
    options: ['Boys Over Flowers', 'The Heirs', 'Legend of the Blue Sea', 'City Hunter'],
    answer: 'Legend of the Blue Sea',
  },
  {
    question: '7. Qual dorama é este?',
    image: 'assets/acao.png', // Substitua pela URL da imagem
    options: ['Doctor Stranger', 'Good Doctor', 'The K2', 'Misty'],
    answer: 'Good Doctor',
  },
  {
    question: '8. Qual dorama é este?',
    image: 'assets/acao.png', // Substitua pela URL da imagem
    options: ['Cheese in the Trap', 'Pinocchio', 'Misaeng', 'Reply 1988'],
    answer: 'Misaeng',
  },
  {
    question: '9. Qual dorama é este?',
    image: 'assets/acao.png', // Substitua pela URL da imagem
    options: ['W', 'Kingdom', 'Alice', 'Stranger'],
    answer: 'Alice',
  },
  {
    question: '10. Qual dorama é este?',
    image: 'assets/acao.png', // Substitua pela URL da imagem
    options: ['Vincenzo', 'The K2', 'Signal', 'Descendants of the Sun'],
    answer: 'The K2',
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

function displayQuestion() {
    const questionData = quizData[currentQuestion];
    
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;
    
    const imageElement = document.createElement('div');
    imageElement.className = 'question-image';
    imageElement.style.backgroundImage = `url(${questionData.image})`;
  
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
    quizContainer.appendChild(imageElement); // Adiciona a imagem aqui
    quizContainer.appendChild(optionsElement);
  }