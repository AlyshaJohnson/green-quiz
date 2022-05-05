// get elements
let nextButton = document.getElementById('btn-forward');
let backButton = document.getElementById('btn-back');
let submitButton = document.getElementById('btn-submit');
let helpButton = document.getElementById('btn-help');
let questionElement = document.getElementById('question');
let answerElement = document.getElementById('answer-form');
let closeButton = document.getElementById('close-btn');
let popUp = document.getElementById('pop-up');
let overlay = document.getElementById('overlay');

let shuffledQuestions, currentQuestionIndex, score;

// button actions
nextButton.addEventListener('click', setNextQuestion);
backButton.addEventListener('click', previousQuestion);
//submitButton.addEventListener('click', )
helpButton.addEventListener('click', selectHelpButton);
closeButton.addEventListener('click', closeButton);

// questions
let questions = [
  {
    question: 'Question 1',
    answers: [
      { text: 'Answer A', score: 2},
      { text: 'Answer B', score: 1},
      { text: 'Answer C', score: 3},
      { text: 'Answer D', score: 4},
    ]
  },
  {
      question: 'Question 2',
      answers: [
        { text: 'Answer A', score: 2},
        { text: 'Answer B', score: 1},
        { text: 'Answer C', score: 3},
        { text: 'Answer D', score: 4},
      ]
  },
  {
      question: 'Question 3',
      answers: [
        { text: 'Answer A', score: 2},
        { text: 'Answer B', score: 1},
        { text: 'Answer C', score: 3},
        { text: 'Answer D', score: 4},
      ]
  },
  {
      question: 'Question 4',
      answers: [
        { text: 'Answer A', score: 2},
        { text: 'Answer B', score: 1},
        { text: 'Answer C', score: 3},
        { text: 'Answer D', score: 4},
      ]
  },
  {
      question: 'Question 5',
      answers: [
        { text: 'Answer A', score: 2},
        { text: 'Answer B', score: 1},
        { text: 'Answer C', score: 3},
        { text: 'Answer D', score: 4},
      ]
  },
  {
      question: 'Question 6',
      answers: [
        { text: 'Answer A', score: 2},
        { text: 'Answer B', score: 1},
        { text: 'Answer C', score: 3},
        { text: 'Answer D', score: 4},
      ]
  },
  {
      question: 'Question 7',
      answers: [
        { text: 'Answer A', score: 2},
        { text: 'Answer B', score: 1},
        { text: 'Answer C', score: 3},
        { text: 'Answer D', score: 4},
      ]
  },
  {
      question: 'Question 8',
      answers: [
        { text: 'Answer A', score: 2},
        { text: 'Answer B', score: 1},
        { text: 'Answer C', score: 3},
        { text: 'Answer D', score: 4},
      ]
  }
]

// start quiz on load
window.addEventListener('load',loadQuiz);
window.addEventListener('load', selectHelpButton);

function loadQuiz() {
    console.log('loadQuiz');
    setNextQuestion();
    score = 0;
}

// set next question
function setNextQuestion() {
    console.log('setNextQuestion');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

// show question
function showQuestion (question) {
  console.log('showQuestion');
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    let button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
  });
}

// pop up on load
function loadPopUp() {
  selectHelpButton();
}

//select answer


//move to next question


// submit quiz
function submitQuiz() {
    console.log('submitQuiz');
}

// count score - need to check love maths example

// show results

// load previous question - optional at this point
function previousQuestion() {
    console.log('previousQuestion');
}

// select help button
function selectHelpButton() {
    console.log('selectHelpButton');
    popUp.classList.add('active');
    overlay.classList.add('active');
}

// close help
function closeHelp() {
  console.log('closeButton');
  popUp.classList.remove('active');
  overlay.classList.remove('active');
}