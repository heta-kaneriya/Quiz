const quizData = [
    {
      question: "1) CSS stands for -",
      options: [
        "Cascade style sheets",
        "Color and style sheets",
        "Cascading style sheets",
        "None of the above",
      ],
      answer: "Cascading style sheets",
    },
    {
        question: "2) The property in CSS used to change the background color of an element is -",
        options: [
          "bgcolor",
          "color",
          "background-color",
          "All of these",
        ],
        answer: "background-color",
      },
      {
        question: "3) The property in CSS used to change the text color of an element is -",
        options: [
            "bgcolor",
            "color",
            "background-color",
            "All of these",
        ],
        answer: "color",
      },
      {
        question: "4) The CSS property used to control the element's font-size is -",
        options: [
          "text-style",
          "text-size",
          "font-size",
          "None of the above",
        ],
        answer: "font-size",
      },
      {
        question: "5) The HTML attribute used to define the inline styles is -",
        options: [
          "<style>",
          "style",
          "<link>",
          "<script>",
        ],
        answer: "style",
      },
      {
        question: "6) The HTML attribute used to define the internal stylesheet is -",
        options: [
            "<style>",
            "style",
            "<link>",
            "<script>",
        ],
        answer: "<style>",
      },
      {
        question: "7) Which of the following CSS property is used to set the background image of an element?",
        options: [
          "background-attachment",
          "background-image",
          "background-color",
          "None of the above",
        ],
        answer: "background-image",
      },
      {
        question: "8) Which of the following is the correct syntax to make the background-color of all paragraph elements to yellow?",
        options: [
          "p {background-color : yellow;}",
          "p {background-color : #yellow;}",
          "all {background-color : yellow;}",
          "all p {background-color : #yellow;}",
        ],
        answer: "p {background-color : yellow;}",
      },
      {
        question: "9) Which of the following is the correct syntax to display the hyperlinks without any underline?",
        options: [
          "a {text-decoration : underline;}",
          "a {decoration : no-underline;}",
          "a {text-decoration : none;}",
          "None of the above",
        ],
        answer: "a {text-decoration : none;}",
      },
      {
        question: "10) Which of the following property is used as the shorthand property for the padding properties?",
        options: [
          "padding-left",
          "padding-right",
          "padding",
          "All of these",
        ],
        answer: "padding",
      },
      {
        question: "11) The CSS property used to make the text bold is -",
        options: [
          "font-weight : bold",
          "weigth : bold",
          "font : bold",
          "style : bold",
        ],
        answer: "font-weight : bold",
      },
      {
        question: "12) Are the negative values allowed in padding property?",
        options: [
          "Yes",
          "No",
          "Can't say",
          "May be",
        ],
        answer: "No",
      },
      {
        question: "13) The CSS property used to specify the transparency of an element is -",
        options: [
          "Opacity",
          "Filter",
          "Visibility",
          "Overlay",
        ],
        answer: "Opacity",
      },
      {
        question: "14) Which of the following CSS property is used to specify the space between every letter inside an element?",
        options: [
          "alpha-spacing",
          "character-spacing",
          "letter-spacing",
          "alphabet-spacing",
        ],
        answer: "letter-spacing",
      },
      {
        question: "15) How to select the elements with the class name 'example'",
        options: [
          "example",
          "#example",
          ".example",
          "Class example",
        ],
        answer: ".example",
      },
  ];
  
  const quizContainer = document.getElementById("quiz");
  const resultContainer = document.getElementById("result");
  const submitButton = document.getElementById("submit");
  const retryButton = document.getElementById("retry");
  const showAnswerButton = document.getElementById("showAnswer");
  const backButton = document.getElementById("back");
  
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
  
    const questionElement = document.createElement("div");
    questionElement.className = "question";
    questionElement.innerHTML = questionData.question;
  
    const optionsElement = document.createElement("div");
    optionsElement.className = "options";
  
    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);
  
    for (let i = 0; i < shuffledOptions.length; i++) {
      const option = document.createElement("label");
      option.className = "option";
  
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "quiz";
      radio.value = shuffledOptions[i];
  
      const optionText = document.createTextNode(shuffledOptions[i]);
  
      option.appendChild(radio);
      option.appendChild(optionText);
      optionsElement.appendChild(option);
    }
  
    quizContainer.innerHTML = "";
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
    quizContainer.style.display = "none";
    submitButton.style.display = "none";
    retryButton.style.display = "inline-block";
    showAnswerButton.style.display = "inline-block";
    bcakButton.style.display = "inline-block";
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
  }
  
  function retryQuiz() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    quizContainer.style.display = "block";
    submitButton.style.display = "inline-block";
    retryButton.style.display = "none";
    showAnswerButton.style.display = "none";
    backButton.style.display = "inline-block";
    resultContainer.innerHTML = "";
    displayQuestion();
  }
  
  function showAnswer() {
    quizContainer.style.display = "none";
    submitButton.style.display = "none";
    retryButton.style.display = "inline-block";
    showAnswerButton.style.display = "none";
    backButton.style.display = "inline-block";
  
    let incorrectAnswersHtml = "";
    for (let i = 0; i < incorrectAnswers.length; i++) {
      incorrectAnswersHtml += `
      <p>
        <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
        <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
        <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
      </p>
    `;
    }
  
    resultContainer.innerHTML = `
    <p>You scored ${score} out of ${quizData.length}!</p>
    <p>Incorrect Answers:</p>
    ${incorrectAnswersHtml}
  `;
  }
  
  submitButton.addEventListener("click", checkAnswer);
  retryButton.addEventListener("click", retryQuiz);
  showAnswerButton.addEventListener("click", showAnswer);
  backButton.addEventListener("click", back);
  
  displayQuestion();
  