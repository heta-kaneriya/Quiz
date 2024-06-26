const quizData = [
  {
    question: "1) Which type of JavaScript language is ___",
    options: [
      "Object-Oriented",
      "Object-Based",
      "Assembly-language",
      "High-level",
    ],
    answer: "Object-Based",
  },
  {
    question:
      "2) Which one of the following also known as Conditional Expression:",
    options: [
      "Alternative to if-else",
      "Switch statement",
      "If-then-else statement",
      "Immediate if",
    ],
    answer: "Immediate if",
  },
  {
    question: "3) In JavaScript, what is a block of statement?",
    options: [
      "Conditional block",
      "Block that combines a number of statements into a single compound statement",
      "Both conditional block and a single statement",
      "Block that contains a single statement",
    ],
    answer:
      "Block that combines a number of statements into a single compound statement",
  },
  {
    question:
      "4) When interpreter encounters an empty statements, what it will do:",
    options: [
      "Shows a warning",
      "Prompts to complete the statement",
      "Throws an error",
      "Ignores the statements",
    ],
    answer: "Ignores the statements",
  },
  {
    question: "5) The `function` and `var` are known as:",
    options: ["Keyword", "Data types", "Declaration statements", "Prototypes"],
    answer: "Declaration statements",
  },
  {
    question:
      "6) In the following given syntax of the switch statement, the Expression is compared with the labels using which one of the following operators?<br>switch(expression)<br>{<br>\t\tstatement<br>}",
    options: ["===", "equals", "==", "equals"],
    answer: "===",
  },
  {
    question:
      "7) Which of the following variables takes precedence over the others if the names are the same?",
    options: [
      "Global variable",
      "The local element",
      "The two of the above",
      "None of the above",
    ],
    answer: "The local element",
  },
  {
    question:
      "8) Which one of the following is the correct way for calling the JavaScript code?",
    options: ["Preprocessor", "Triggering Event", "RMI", "Function/Method"],
    answer: "Function/Method",
  },
  {
    question: "9) Which of the following type of a variable is volatile?",
    options: [
      "Mutable variable",
      "Dynamic variable",
      "Volatile variable",
      "Immutable variable",
    ],
    answer: "Mutable variable",
  },
  {
    question:
      "10) Which of the following option is used as hexadecimal literal beginning?",
    options: ["00", "0x", "0X", "Both 0x and 0X"],
    answer: "Both 0x and 0X",
  },
  {
    question:
      "11) When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints______.",
    options: [
      "Prints an exception error",
      "Prints an overflow error",
      "Displays 'Infinity'",
      "Prints the value as such",
    ],
    answer: "Displays 'Infinity'",
  },
  {
    question:
      "12) In the JavaScript, which one of the following is not considered as an error:",
    options: [
      "Syntax error",
      "Missing of semicolons",
      "Division by zero",
      "Missing of Bracket",
    ],
    answer: "Division by zero",
  },
  {
    question:
      "13) Which of the following number object function returns the value of the number?",
    options: ["toString()", "valueOf()", "toLocaleString()", "toPrecision()"],
    answer: "valueOf()",
  },
  {
    question:
      "14) Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters?",
    options: ["slice()", "split()", "substr()", "search()"],
    answer: "substr()",
  },
  {
    question:
      "15) Choose the correct snippet from the following to check if the variable 'a' is not equal the 'NULL':",
    options: ["if(a!==null)", "if(a!)", "if(a!null)", "if(a!=null)"],
    answer: "if(a!=null)",
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
    <p>You scored ${score} out of ${quizData.length}</p>
    <p>Incorrect Answers:</p>
    ${incorrectAnswersHtml}
  `;
}

submitButton.addEventListener("click", checkAnswer);
retryButton.addEventListener("click", retryQuiz);
showAnswerButton.addEventListener("click", showAnswer);
backButton.addEventListener("click", back);

displayQuestion();
