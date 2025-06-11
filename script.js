// ==============================
// QUIZ FUNCTIONALITY
// ==============================

const quizData = [
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      answer: "JavaScript"
    },
    {
      question: "What does CSS stand for?",
      options: ["Computer Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets", "Creative Style Syntax"],
      answer: "Cascading Style Sheets"
    },
    {
      question: "Which HTML tag is used to create a link?",
      options: ["<a>", "<link>", "<href>", "<url>"],
      answer: "<a>"
    }
  ];
  
  function loadQuiz() {
    const container = document.getElementById("quiz-container");
    container.innerHTML = "";
    quizData.forEach((q, index) => {
      const div = document.createElement("div");
      div.className = "quiz-question";
      div.innerHTML = `<p><strong>${index + 1}. ${q.question}</strong></p>`;
      q.options.forEach(opt => {
        div.innerHTML += `
          <label>
            <input type="radio" name="q${index}" value="${opt}" />
            ${opt}
          </label>
        `;
      });
      container.appendChild(div);
    });
  }
  
  function submitQuiz() {
    let score = 0;
    quizData.forEach((q, index) => {
      const selected = document.querySelector(`input[name="q${index}"]:checked`);
      if (selected && selected.value === q.answer) {
        score++;
      }
    });
  
    const result = document.getElementById("quiz-result");
    result.textContent = `You scored ${score} out of ${quizData.length}.`;
  }
  
  // Load quiz on page load
  window.onload = loadQuiz;
  
  
  // ==============================
  // API FETCH FUNCTIONALITY
  // ==============================
  
  function getJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(res => res.json())
      .then(data => {
        document.getElementById("joke-text").textContent = `${data.setup} - ${data.punchline}`;
      })
      .catch(err => {
        document.getElementById("joke-text").textContent = "Sorry, couldn't load a joke right now.";
        console.error(err);
      });
  }
  