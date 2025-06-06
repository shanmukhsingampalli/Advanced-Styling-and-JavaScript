const questions = [
  {
    question: "Which language runs in a web browser?",
    answers: ["Java", "C", "Python", "JavaScript"],
    correct: "JavaScript",
  },
  {
    question: "What does CSS stand for?",
    answers: [
      "Colorful Style Sheet",
      "Cascading Style Sheet",
      "Computer Style Sheet",
    ],
    correct: "Cascading Style Sheet",
  },
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Text Markup Language",
      "High Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Text Markup Link",
    ],
    correct: "Hyper Text Markup Language",
  },
  {
    question: "What property is used to change the text color in CSS?",
    answers: ["text-color", "font-color", "color", "text-style"],
    correct: "color",
  },
  {
    question:
      "Which JavaScript method is used to add an element at the end of an array?",
    answers: ["push()", "append()", "add()", "insert()"],
    correct: "push()",
  },

  {
    question: "Which CSS property controls the text size?",
    answers: ["text-size", "font-size", "text-style", "font-style"],
    correct: "font-size",
  },
  {
    question: "What is the correct way to declare a JavaScript variable?",
    answers: ["v name;", "variable name;", "let name;", "var: name;"],
    correct: "let name;",
  },
  {
    question: "What is the default display property for div elements?",
    answers: ["inline", "block", "inline-block", "flex"],
    correct: "block",
  },
  {
    question: "Which event occurs when a user clicks on an HTML element?",
    answers: ["onmouseclick", "onclick", "onchange", "onmouseover"],
    correct: "onclick",
  },
];

let current = 0;

function loadQuestion() {
  const q = questions[current];
  document.getElementById("question").innerText = q.question;
  document.getElementById("answers").innerHTML = q.answers
    .map((a) => `<button onclick="checkAnswer('${a}')">${a}</button>`)
    .join("");
}

function checkAnswer(answer) {
  const correct = questions[current].correct;
  alert(
    answer === correct ? "✅ Correct!" : "❌ Wrong! Correct answer: " + correct
  );
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-section").innerHTML =
      "<h2>🎉 Quiz Completed!</h2>";
  }
}

function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById(
        "joke-text"
      ).innerText = `${data.setup} - ${data.punchline}`;
    })
    .catch(() => {
      document.getElementById("joke-text").innerText =
        "Failed to fetch a joke. Please try again.";
    });
}

loadQuestion();
