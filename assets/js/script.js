// questions
let questions = [{
    question: 'What type of car do you drive?',
    answers: [{
        text: 'Full plug-in electric',
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
    question: 'What method do you use to take home your groceries?',
    answers: [{
        text: 'I use my own bags when I remember',
        score: 3
      },
      {
        text: 'I buy one from the store everytime',
        score: 1
      },
      {
        text: 'I take my own bags / basket / box',
        score: 4
      },
      {
        text: 'I make sure the store I use only provides paper bags',
        score: 3
      },
    ],
    // credit to Awesome Content on pikwizard
    images: './assets/images/pikwizard-hand-of-a-woman-holding-grocery-bag.jpeg',
    alt: 'A hand holding a grocery bag',
  },
  {
    question: 'What is your main mode of transport?',
    answers: [{
        text: 'Public transport (bus, train, tram, etc.)',
        score: 3
      },
      {
        text: 'Car / taxi',
        score: 1
      },
      {
        text: 'Car pool',
        score: 2
      },
      {
        text: 'Walking / cycling',
        score: 4
      },
    ],
    // credit to betteratf8 on unsplash
    images: './assets/images/weston-m-Vckq-heaypg-unsplash.jpeg',
    alt: 'Sign post showing direction of travel',
  },
  {
    question: 'When picking cleaning products, how do you chose?',
    answers: [{
        text: 'I use refillable cleaning products / eco-friendly solutions',
        score: 3
      },
      {
        text: 'I try and use environmentally sound cleaning products, but occasionally I get out the bleach and Mr Muscle.',
        score: 2
      },
      {
        text: 'The cheapest / what is on offer',
        score: 1
      },
      {
        text: 'White vinegar, baking soda and elbow grease.',
        score: 4
      },
    ],
    // credit to JESHOOTS on unsplash
    images: './assets/images/jeshoots-com-__ZMnefoI3k-unsplash.jpeg',
    alt: 'Cleaning product being sprayed',
  },
  {
    question: 'What do you do with items you no longer need?',
    answers: [{
        text: 'Upcycle what I can, donate / sell the rest',
        score: 4
      },
      {
        text: 'Donate them to friends, family charity shops or collection banks',
        score: 3
      },
      {
        text: 'Sell what I can and chuck the rest',
        score: 2
      },
      {
        text: 'Bin them',
        score: 1
      },
    ],
    // credit to sweetpagesco on unsplash
    images: './assets/images/sarah-brown-oa7pqZmmhuA-unsplash.jpeg',
    alt: 'Sorting clothes items for donation',
  },
  {
    question: 'What is your diet typically like?',
    answers: [{
        text: 'Full on carnivore!!',
        score: 1
      },
      {
        text: 'Flexitarian - I only eat meat / fish a couple of times a week',
        score: 2
      },
      {
        text: 'Full vegan, only buying organic products',
        score: 4
      },
      {
        text: 'Vegetarian / Pescetarian',
        score: 3
      },
    ],
    // image from pikwizard
    images: './assets/images/pikwizard-fruit-food-diet.jpeg',
    alt: 'variety of fruit and veg',
  },
  {
    question: 'How conscientious are you with your bills?',
    answers: [{
        text: 'I have solar panels or other renewable energy solutions to help reduce my fossil fuel usage',
        score: 4
      },
      {
        text: 'I only pick providers that are environmentally conscious and do everything in my power to reduce the amount I use.',
        score: 3
      },
      {
        text: 'There are small things I do to reduce my bills, such as switching off lights, wearing jumpers when its cold, etc.',
        score: 2
      },
      {
        text: 'I go with what is cheapest on the comparison site',
        score: 1
      },
    ],
    // credit to Awesome Content on pikwizard
    images: './assets/images/pikwizard-miniature-house-with-energy-efficiency-rating-chart.jpeg',
    alt: 'Miniture wooden house with energy efficiency rating chart',
  }
]

//instructions
let instructions = [
  'Read the question and select the button with the most appropriate answer.',
  "The selected answer will turn green and the next button will become active to allow you to move onto the next question.",
  "If you want to change your answer, please use the reset question button which will allow you to amend your answer.",
  "The question counter in the top right hand corner, lets you know your progress through the quiz.",
  "On the last question, the 'submit' button appears allowing you to submit your answers and get your result!",
]

let instructionVideos = [
  "./assets/videos/instruction1.webm",
  "./assets/videos/instruction2.webm",
  "./assets/videos/instruction3.mp4",
  "./assets/videos/instruction4.mp4",
  "./assets/videos/instruction5.mp4",
]

// get question page elements
let nextButton = document.getElementById('btn-forward');
let resetQuestionButton = document.getElementById('btn-reset-question');
let submitButton = document.getElementById('btn-submit');
let helpButton = document.getElementById('btn-help');
let questionElement = document.getElementById('question');
let answerElement = document.getElementById('answer-form');
let counterContainer = document.getElementById('question-counter');
let noOfQuestions = questions.length;
let image = document.getElementById('question-image');
let answerButtons = document.getElementsByClassName('.btn-answer');
let resultsContainer = document.getElementById('results-container');
let questionContainer = document.getElementById('question-container');

// get help pop-up elements
let closeButton = document.getElementById('close-btn');
let popUp = document.getElementById('pop-up');
let overlay = document.getElementById('overlay');
let instructionText = document.getElementById('instruction');
let instructionVideo = document.getElementById('instruction-video');
let instructionLeft = document.getElementById('instruction-btn-left');
let instructionRight = document.getElementById('instruction-btn-right');
let instructionLength = instructions.length - 1;

// get results page elements
let showScore = document.getElementById('show-score');
let resultsDescription = document.getElementById('results-description');
let resultsSuggestion = document.getElementById('results-suggestion');
let resultsName = document.getElementById('results-name');
let resultsImage = document.getElementById('result-image');

// other variables
let shuffledQuestions, currentQuestionIndex, score, counter, acceptingAnswers, selectedChoice, selectedScore, currentInstructionIndex;

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
  instructionLeft.addEventListener('click', nextInstruction);
  instructionRight.addEventListener('click', prevInstruction);

  //add event listeners to answer buttons
  for (let i = 0; i < 4; i++) {
    document.getElementById("answer-" + (i + 1)).addEventListener('click', selectAnswer);
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
  if (selectedChoice !== undefined) {
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
    document.getElementById('answer-' + (i + 1)).innerText = answer.text;
    document.getElementById('answer-' + (i + 1)).value = answer.score;
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
  nextButton.disabled = true;
  submitButton.disabled = true;
}

// submit quiz
function submitQuiz() {
  console.log('submitQuiz');
  // score counter
  console.log(score);
  showResults();
}

// show results
function showResults() {
  console.log("showResults");
  resultsContainer.classList.remove('hide');
  questionContainer.classList.add('hide');
  // show score
  showScore.innerText = "You've scored " + score + " out of 32!";
  if (score < 11) {
    resultsName.innerText = "Starting out on your green journey";
    resultsDescription.innerText = "It seems that maybe the environment is not your biggest priority right now. However, you have taken the quiz so its a good start! Please read the suggestions and it will get you started!";
    resultsSuggestion.innerText = "suggestions";
    // credit to jb_charrat on unsplash
    resultsImage.src = "./assets/images/jean-baptiste-charrat-F5s2rcNtSi0-unsplash.jpeg";
    resultsImage.alt = "Young evergreen sapling";
  } else if (score > 21) {
    resultsName.innerText = "An eco-warrior";
    resultsDescription.innerText = "You're a keen-bean, green machine! You love the environment and you're doing as much as you can to help keep it safe.";
    resultsSuggestion.innerText = "suggestions";
    // credit to andrewcoelho on unsplash
    resultsImage.src = "./assets/images/andrew-coelho-aL7SA1ASVdQ-unsplash.jpeg";
    resultsImage.alt = "Evergreen forest with mist";
  } else {
    resultsName.innerText = "Mid-range Greeny";
    resultsDescription.innerText = "You are somewhere between light and forest green. You've made a great start at doing your bit to save the planet.";
    resultsSuggestion.innerText = "suggestions";
    // credit to alexbelogub on unsplash
    resultsImage.src = "./assets/images/alex-belogub-SIXwWblOzOw-unsplash.jpeg";
    resultsImage.alt = "Small evergreen trees eclipsed by the rest of the forest";
  };
}

// select help button
function selectHelpButton() {
  console.log('selectHelpButton');
  popUp.classList.add('active');
  overlay.classList.add('active');
  currentInstructionIndex = 0;
  showInstruction();
  autoRun();
}

// start instruction
function changeImage(x) {
  currentInstructionIndex += x;
  if (currentInstructionIndex > instructionLength) {
    currentInstructionIndex = 0;
  }
  if (currentInstructionIndex < instructionLength) {
    prevInstruction.disabled = true;
  }
  showInstruction();
}

// show instruction
function showInstruction() {
  instructionText.innertext = instructions[currentInstructionIndex];
  instructionVideo.src = instructionVideos[currentInstructionIndex];
}

// next instruction
function nextInstruction() {
  changeImage(1);
}

// previous instruction
function prevInstruction() {
  changeImage(-1);
}

// auto change instruction
function autoRun() {
  setInterval(changeImage(1), 10000);
}

// close help
function closeHelp() {
  console.log('closeButton');
  popUp.classList.remove('active');
  overlay.classList.remove('active');
}