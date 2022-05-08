// questions
let questions = [{
    question: 'What type of car do you drive?',
    answers: [{
        text: 'Full plug-in Electric',
        score: 3
      },
      {
        text: 'Petrol / Diesel',
        score: 1
      },
      {
        text: 'Hybrid / alternate fuel',
        score: 2
      },
      {
        text: 'I do not own a car / I use public transport',
        score: 4
      },
    ],
    // credit to bjearwicke on freeimages
    images: './assets/images/running-on-empty-1311801.jpeg',
    alt: 'Empty fuel gauge',
  },
  {
    question: 'What level of recycling do you currently do?',
    answers: [{
        text: 'I only fill up the general waste bin / I do not have a recycling bin.',
        score: 1
      },
      {
        text: 'I actively reduce the amount that goes into the general waste bin by recyling, composting and using local services to reduce waste.',
        score: 4
      },
      {
        text: 'My recycling bin and general waste bin are used at the same rate',
        score: 2
      },
      {
        text: 'More goes into the recycling bin than the general waste bin',
        score: 3
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
let resetQuestionButton = document.getElementById('btn-reset-question');
let submitButton = document.getElementById('btn-submit');
let helpButton = document.getElementById('btn-help');
let questionElement = document.getElementById('question');
let answerElement = document.getElementById('answer-form');
let closeButton = document.getElementById('close-btn');
let popUp = document.getElementById('pop-up');
let overlay = document.getElementById('overlay');
let counterContainer = document.getElementById('question-counter');
let noOfQuestions = questions.length;
let image = document.getElementById('question-image');
let answerButtons = document.getElementsByClassName('.btn-answer');
let resultsContainer = document.getElementById('results-container');
let questionContainer = document.getElementById('question-container')

let shuffledQuestions, currentQuestionIndex, score, counter, acceptingAnswers, selectedChoice, selectedScore;

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
  resetQuestionButton.addEventListener('click', resetQuestion);
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
  nextButton.disabled = true;
  submitButton.disabled = true;
  acceptingAnswers = true;
  if (selectedChoice !== undefined){
    selectedChoice.classList.remove('active');
  };
}

// show next question
function showNextQuestion(question) {
  console.log('showNextQuestion');
  // show question from array
  questionElement.innerText = question.question;
  // show answer from array
  question.answers.forEach((answer, i) => {
    document.getElementById('answer-'+(i+1)).innerText = answer.text;
    document.getElementById('answer-'+(i+1)).value = answer.score;
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
  // score = score + question.answer.score
  console.log(selectedScore);
  console.log(score);
  score = parseInt(score) + parseInt(selectedScore);
}

// selected button changes colour and answer used for score.
function selectAnswer(event) {
  if (acceptingAnswers == true) {
    acceptingAnswers = false;
    event.target.classList.add('active');
    selectedChoice = event.target;
    selectedScore = event.target.value;
  }
  // if answer is selected, next button abled
  if (answerButtons = 'active') {
    nextButton.disabled = false;
    submitButton.disabled = false;
  }
}

// reset question
function resetQuestion() {
  console.log('resetQuestion');
  acceptingAnswers = true;
  selectedChoice.classList.remove('active');
}

// submit quiz
function submitQuiz() {
  console.log('submitQuiz');
  // score counter

  showResults();
}

// show results
function showResults () {
  console.log("showResults");
  resultsContainer.classList.remove('hide');
  questionContainer.classList.add('hide');

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