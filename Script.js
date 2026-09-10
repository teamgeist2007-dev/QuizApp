let questions = [
  {
    "question": "Wofür steht die Abkürzung HTTP?",
    "answer1": "HyperText Transfer Protocol",
    "answer2": "High Transfer Text Process",
    "answer3": "Hyperlink Transmission Program",
    "answer4": "Home Tool Transfer Protocol",
    "right_answer": 1
  },
  {
    "question": "Welche Sprache wird hauptsächlich zur Gestaltung von Webseiten verwendet?",
    "answer1": "Python",
    "answer2": "SQL",
    "answer3": "CSS",
    "answer4": "Java",
    "right_answer": 3
  },
  {
    "question": "Welches Gerät verbindet mehrere Netzwerke miteinander?",
    "answer1": "Monitor",
    "answer2": "Router",
    "answer3": "Drucker",
    "answer4": "Tastatur",
    "right_answer": 2
  },
  {
    "question": "Welche Dateiendung wird für JavaScript-Dateien verwendet?",
    "answer1": ".html",
    "answer2": ".css",
    "answer3": ".java",
    "answer4": ".js",
    "right_answer": 4
  },
  {
    "question": "Was bedeutet die Abkürzung CPU?",
    "answer1": "Computer Processing Utility",
    "answer2": "Central Processing Unit",
    "answer3": "Core Program Unit",
    "answer4": "Central Power Utility",
    "right_answer": 2
  }
]

let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
 let question = questions[currentQuestion];
 document.getElementById('questiontext') = question['question'];
 document.getElementById('answer_1').innerHTML = question['anser1'];
  document.getElementById('answer_2').innerHTML = question['anser2'];
   document.getElementById('answer_3').innerHTML = question['anser3'];
    document.getElementById('answer_4').innerHTML = question['anser4'];
}