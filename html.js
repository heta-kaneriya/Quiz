const quizData = [
  {
    question: "1) What does HTML stand for ?",
    options: [
      "HighText Machine Language",
      "HyperText and links Markup Language",
      "HyperText Markup Language",
      "None of these",
    ],
    answer: "HyperText Markup Language",
  },
  {
    question:
      "2) The correct sequence of HTML tags for starting a webpage is -",
    options: [
      "Head, Title, HTML, body",
      "HTML, Body, Title, Head",
      "HTML, Head, Title, Body",
      "HTML, Head, Title, Body",
    ],
    answer: "HTML, Head, Title, Body",
  },
  {
    question:
      "3)  Which of the following element is responsible for making the text bold in HTML?",
    options: ["<pre>", "<a>", "<b>", "<br>"],
    answer: "<b>",
  },
  {
    question:
      "4) Which of the following tag is used for inserting the largest heading in HTML?",
    options: ["<h1>", "<h3>", "<h5>", "<h6>"],
    answer: "<h1>",
  },
  {
    question:
      "5) Which of the following tag is used to insert a line-break in HTML?",
    options: ["<br>", "<a>", "<pre>", "<b>"],
    answer: "<br>",
  },
  {
    question:
      "6) How to create an unordered list (a list with the list items in bullets) in HTML?",
    options: ["<ul>", "<ol>", "<li>", "<i>"],
    answer: "<ul>",
  },
  {
    question:
      "7) How to create an ordered list (a list with the list items in numbers) in HTML?",
    options: ["<ul>", "<ol>", "<li>", "<i>"],
    answer: "<ol>",
  },
  {
    question:
      "8) Which of the following element is responsible for making the text italic in HTML?",
    options: ["<i>", "<italic>", "<it>", "<pre>"],
    answer: "<i>",
  },
  {
    question: "9) input tag is -",
    options: [
      "A formate tag",
      "An empty tag",
      "All of the above",
      "None of the above",
    ],
    answer: "An empty tag",
  },
  {
    question:
      "10) Which of the following tag is used to make the underlined text?",
    options: ["<i>", "<ul>", "<u>", "<pre>"],
    answer: "<u>",
  },
  {
    question:
      "11) Which of the following tag is used to define options in a drop-down selection list?",
    options: ["<select>", "<list>", "<dropdown>", "<option>"],
    answer: "<option>",
  },
  {
    question: "12) HTML tags are enclosed in-",
    options: ["# and #", "{ and }", "! and ?", "< and >"],
    answer: "< and >",
  },
  {
    question:
      "13) Which of the following tag is used to add rows in the table?",
    options: [
      "<td> and </td>",
      "<th> and </th>",
      "<tr> and </tr>",
      "None of the above",
    ],
    answer: "<tr> and </tr>",
  },
  {
    question: "14) hr tag in HTML is used for -",
    options: ["New line", "Vertical line", "New paragraph", "Horizontal ruler"],
    answer: "Horizontal ruler",
  },
  {
    question:
      "15) Which of the following attribute is used to provide a unique name to an element?",
    options: ["Class", "Id", "Type", "None of the above"],
    answer: "Id",
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
