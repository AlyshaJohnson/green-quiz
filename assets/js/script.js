// get elements
let nextButton = document.getElementById('btn-forward');
let backButton = document.getElementById('btn-back');
let submitButton = document.getElementById('btn-submit');
let helpButton = document.getElementById('btn-help');

let shuffledQuestions, currentQuestionIndex;

// button actions
nextButton.addEventListener('click', setNextQuestion);
backButton.addEventListener('click', previousQuestion);
//submitButton.addEventListener('click', )
helpButton.addEventListener('click', selectHelpButton);

// start quiz on load
window.onload = loadQuiz();

function loadQuiz() {
    console.log('loadQuiz');
    setNextQuestion();
    loadPopUp();
}

// pop up on load
function loadPopUp() {
    selectHelpButton();
}

// set next question
function setNextQuestion() {
    console.log('setNextQuestion');
    
}

// show question

// submit answer
function submitAnswer() {
    console.log('submitAnswer');
}

// count score - need to check love maths example

// show results

// load previous question
function previousQuestion() {
    console.log('previousQuestion');
}

// select help button
function selectHelpButton() {
    console.log('selectHelpButton');
}

// close help

// questions
const questions = [
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