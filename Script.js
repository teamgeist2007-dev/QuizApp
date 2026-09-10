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


let rightQuestions = 0;

let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {

if(currentQuestion >= questions.length) {
// TODO: Show End Screen
document.getElementById('endScreen').style = '';
document.getElementById('questionBody').style = 'display: none';

document.getElementById('amountofQuestions').innerHTML = questions.length;
document.getElementById('amountofrightQuestions').innerHTML = rightQuestions;
document.getElementById('header-image').src = 'assets/img/Pokal.png';
 } else{ 


 let question = questions[currentQuestion];

 document.getElementById('question-number').innerHTML = currentQuestion +1;
 document.getElementById('questiontext').innerHTML = question['question'];
 document.getElementById('answer_1').innerHTML = question['answer1'];
document.getElementById('answer_2').innerHTML = question['answer2'];
document.getElementById('answer_3').innerHTML = question['answer3'];
document.getElementById('answer_4').innerHTML = question['answer4'];

 }

}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = Number(selection.slice(-1));
    let idOfRightAnswer = `answer_${question['right_answer']}`;


    if (selectedQuestionNumber == question['right_answer']) {
      
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-Button').disabled = false;
}

function nextQuestion(){
currentQuestion++;
resetAnswerButtons();

showQuestion();

document.getElementById('next-Button').disabled = true;
}

function resetAnswerButtons() {
    document.getElementById('answer_1')
        .parentNode.classList.remove('bg-danger', 'bg-success');

    document.getElementById('answer_2')
        .parentNode.classList.remove('bg-danger', 'bg-success');

    document.getElementById('answer_3')
        .parentNode.classList.remove('bg-danger', 'bg-success');

    document.getElementById('answer_4')
        .parentNode.classList.remove('bg-danger', 'bg-success');
}

