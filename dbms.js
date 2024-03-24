const quizData = [
  {
    question:
      "1) Which of the following is generally used for performing tasks like creating the structure of the relations, deleting relation?",
    options: ["DML", "Query", "Relational Schema", "DDL"],
    answer: "DDL",
  },
  {
    question:
      "2) Which of the following provides the ability to query information from the database and insert tuples into, delete tuples from, and modify tuples in the database?",
    options: ["DML", "Query", "Relational Schema", "DDL"],
    answer: "DML",
  },
  {
    question:
      "3) Which one of the following given statements possibly contains the error?",
    options: [
      "select * from emp where empid = 10003;",
      "select empid from emp where empid = 10006;",
      "select empid from emp where empid = 10006;",
      "select empid where empid = 1009 and Lastname = 'GELLER';",
    ],
    answer: "select empid where empid = 1009 and Lastname = 'GELLER';",
  },
  {
    question:
      "4) Ready the Query carefully: <br><br> SELECT emp_name <br> FROM department <br> WHERE dept_name LIKE'_____ Computer Science' <br><br>In the above-given Query, which of the following can be placed in the Query's blank portion to select the 'dept_name' that also contains Computer Science as its ending string?",
    options: ["&", "_", "%", "$"],
    answer: "%",
  },
  {
    question: "5) What do you mean by one to many relationships?",
    options: [
      "One class may have many teachers",
      "One teacher can have many classes",
      "Many classes may have many teachers",
      "Many teachers may have many classes",
    ],
    answer: "One teacher can have many classes",
  },
  {
    question:
      "6) Which one of the following is a type of Data Manipulation Command?",
    options: [
      "Create",
      "Alter",
      "Delete",
      "All of these",
    ],
    answer:
      "Delete",
  },
  {
    question: "7) A Database Management System is a type of _________.",
    options: [
      "system software",
      "application software",
      "general software",
      "Both A and C",
    ],
    answer: "system software",
  },
  {
    question: "8) The term 'FAT' is stands for_____",
    options: [
      "File Allocation Tree",
      "File Allocation Table",
      "File Allocation Graph",
      "All of these",
    ],
    answer: "File Allocation Table",
  },
  {
    question:
      "9) Which of the following can be considered as the maximum size that is supported by FAT?",
    options: ["8GB", "4GB", "4TB", "None of the above"],
    answer: "4GB",
  },
  {
    question:
      "10) Which of the following can be considered as the maximum size that is supported by NTFS?",
    options: ["4GB", "16TB", "64TB", "8TB"],
    answer: "4GB",
  },
  {
    question:
      "11) A huge collection of the information or data accumulated form several different sources is known as ________:",
    options: [
      "Data Management",
      "Data Mining",
      "Data Warehouse",
      "Both B and C",
    ],
    answer: "Data Warehouse",
  },
  {
    question: "12) Which one of the following refers to the 'data about data'?",
    options: ["Directory", "Sub Data", "Warehouse", "Meta Data"],
    answer: "Meta Data",
  },
  {
    question: "13) To which of the following the term 'DBA' referred?",
    options: [
      "Data Bank Administrator",
      "Database Administrator",
      "Data Administrator",
      "None of the above",
    ],
    answer: "Database Administrator",
  },
  {
    question:
      "14) In general, a file is basically a collection of all related______.",
    options: ["Rows & Columns", "Fields", "Database", "Records"],
    answer: "Records",
  },
  {
    question: "15) Rows of a relation are known as the _______.",
    options: ["Degree", "Tuples", "Entity", "All of these"],
    answer: "All of these",
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
