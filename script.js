const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyper Trainer Markup Language",
      "Hyper Transfer Mode Language"
    ],
    answer: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["JavaScript", "HTML", "CSS", "Python"],
    answer: 2
  },
  {
    question: "Which is not a JavaScript framework?",
    options: ["React", "Angular", "Vue", "Django"],
    answer: 3
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "<!-- -->", "#", "/* */"],
    answer: 0
  },
  {
    question: "Which tag is used to include JavaScript in HTML?",
    options: ["<js>", "<script>", "<javascript>", "<code>"],
    answer: 1
  },
  {
    question: "What is the correct way to create a React component?",
    options: [
      "function MyComponent() {}",
      "class MyComponent extends React.Component {}",
      "const MyComponent = () => {}",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: "Which directive is used for looping in Angular templates?",
    options: ["*ngFor", "*ngLoop", "*for", "*loop"],
    answer: 0
  },
  {
    question: "Which CSS property is used to change text color?",
    options: ["background-color", "font-color", "color", "text-color"],
    answer: 2
  },
  {
    question: "What is the output of `typeof null` in JavaScript?",
    options: ["'object'", "'null'", "'undefined'", "'boolean'"],
    answer: 0
  },
  {
    question: "Which of these is a valid React hook?",
    options: ["useFetch", "useLoop", "useState", "useModel"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const quizBox = document.getElementById("quiz-box");
const scoreEl = document.getElementById("score");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  nextBtn.disabled = true;

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");
    btn.onclick = () => selectOption(index, btn);
    optionsEl.appendChild(btn);
  });
}

function selectOption(selectedIndex, selectedBtn) {
  const correctIndex = questions[currentQuestion].answer;
  const allButtons = optionsEl.querySelectorAll("button");

  allButtons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === correctIndex) {
      btn.classList.add("correct");
    } else if (idx === selectedIndex) {
      btn.classList.add("wrong");
    }
  });

  if (selectedIndex === correctIndex) {
    score++;
  }

  nextBtn.disabled = false;
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    quizBox.classList.add("hide");
    resultBox.classList.remove("hide");
    scoreEl.textContent = `${score} / ${questions.length}`;
  }
};

showQuestion();
