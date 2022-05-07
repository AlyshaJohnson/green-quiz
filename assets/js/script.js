// questions
let questions = [{
    question: 'Question 1',
    answers: [{
        text: 'Answer A',
        score: 2
      },
      {
        text: 'Answer B',
        score: 1
      },
      {
        text: 'Answer C',
        score: 3
      },
      {
        text: 'Answer D',
        score: 4
      },
    ],
    images: './',
    alt: '',
  },
  {
    question: 'Question 2',
    answers: [{
        text: 'Answer A',
        score: 2
      },
      {
        text: 'Answer B',
        score: 1
      },
      {
        text: 'Answer C',
        score: 3
      },
      {
        text: 'Answer D',
        score: 4
      },
    ],
    // credit to @sigmund on unsplash
    images: './assets/images/sigmund-3FPtmyflfKQ-unsplash.jpeg',
    alt: 'Black and blue wheelie bins in front of green foliage.',
  },
  {
    question: 'Question 3',
    answers: [{
        text: 'Answer A',
        score: 2
      },
      {
        text: 'Answer B',
        score: 1
      },
      {
        text: 'Answer C',
        score: 3
      },
      {
        text: 'Answer D',
        score: 4
      },
    ],
    images: './',
    alt: '',
  },
  {
    question: 'Question 4',
    answers: [{
        text: 'Answer A',
        score: 2
      },
      {
        text: 'Answer B',
        score: 1
      },
      {
        text: 'Answer C',
        score: 3
      },
      {
        text: 'Answer D',
        score: 4
      },
    ],
    images: './',
    alt: '',
  },
  {
    question: 'Question 5',
    answers: [{
        text: 'Answer A',
        score: 2
      },
      {
        text: 'Answer B',
        score: 1
      },
      {
        text: 'Answer C',
        score: 3
      },
      {
        text: 'Answer D',
        score: 4
      },
    ],
    images: './',
    alt: '',
  },
  {
    question: 'Question 6',
    answers: [{
        text: 'Answer A',
        score: 2
      },
      {
        text: 'Answer B',
        score: 1
      },
      {
        text: 'Answer C',
        score: 3
      },
      {
        text: 'Answer D',
        score: 4
      },
    ],
    images: './',
    alt: '',
  },
  {
    question: 'Question 7',
    answers: [{
        text: 'Answer A',
        score: 2
      },
      {
        text: 'Answer B',
        score: 1
      },
      {
        text: 'Answer C',
        score: 3
      },
      {
        text: 'Answer D',
        score: 4
      },
    ],
    images: './',
    alt: '',
  },
  {
    question: 'Question 8',
    answers: [{
        text: 'Answer A',
        score: 2
      },
      {
        text: 'Answer B',
        score: 1
      },
      {
        text: 'Answer C',
        score: 3
      },
      {
        text: 'Answer D',
        score: 4
      },
    ],
    images: './',
    alt: '',
  }
]

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
let counterContainer = document.getElementById('question-counter')
let noOfQuestions = questions.length
let image = document.getElementById('question-image')

let shuffledQuestions, currentQuestionIndex, score, counter;

// start quiz on load
window.addEventListener('load', loadQuiz);

function loadQuiz() {
  console.log('loadQuiz');
  initEventListeners();
  startQuiz();
}

function initEventListeners() {
  // button actions
  nextButton.addEventListener('click', nextQuestion);
  backButton.addEventListener('click', previousQuestion);
  submitButton.addEventListener('click', submitQuiz)
  helpButton.addEventListener('click', selectHelpButton);
  closeButton.addEventListener('click', closeHelp);

  //add event listeners to answer buttons
  for (let i = 0; i < 4; i++) {
    document.getElementById("answer-"+(i + 1)).addEventListener('click', selectAnswer);
  }
}

// start quiz
function startQuiz() {
  console.log('startQuiz');
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  counter = 0;
  score = 0;
  nextQuestion();
}

// next question
function nextQuestion() {
  console.log('nextQuestion');
  showNextQuestion(shuffledQuestions[currentQuestionIndex]);
  currentQuestionIndex++;
}

// show next question
function showNextQuestion(question) {
  console.log('showNextQuestion');
  // show question from array
  questionElement.innerText = question.question;
  // show answer from array
  question.answers.forEach((answer, i) => {
    document.getElementById('answer-'+(i+1)).innerText = answer.text;
  });
  //show image and alt from array
  image.src = question.images;
  image.alt = question.alt;
  //if question is last then show submit button
  if (counter === noOfQuestions || currentQuestionIndex == (noOfQuestions - 1)) {
    submitButton.classList.remove('hide');
    nextButton.classList.add('hide');
  } else {
    submitButton.classList.add('hide');
    nextButton.classList.remove('hide');
  }
  // progress counter
  counter++;
  counterContainer.innerText = `${counter}/${noOfQuestions}`;
}

// on click resets colour of all answer buttons to neutral, selected button changes colour and answer used for score.
function selectAnswer() {
  answerButtons.classList.add('active');
}

// block user from submitting no answer


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