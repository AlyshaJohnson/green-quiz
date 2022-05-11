//instructions
let instructions = [{
    text: "Read the question and select the button with the most appropriate answer.",
    videoSrc: "./assets/videos/instruction1.webm",
},
{
    text: "The selected answer will turn green and the next button will become active to allow you to move onto the next question.",
    videoSrc: "./assets/videos/instruction2.webm",
},
{
    text: "If you want to change your answer, please use the reset question button which will allow you to amend your answer.",
    videoSrc: "./assets/videos/instruction3.webm",
},
{
    text: "The question counter in the top right hand corner, lets you know your progress through the quiz.",
    videoSrc: "./assets/videos/instruction4.webm",
},
{
    text: "On the last question, the 'submit' button appears allowing you to submit your answers and get your result!",
    videoSrc: "./assets/videos/instruction5.webm",
}];

// get help pop-up elements
let helpButton = document.getElementById('btn-help');
let closeButton = document.getElementById('close-btn');
let popUp = document.getElementById('pop-up');
let overlay = document.getElementById('overlay');
let instructionText = document.getElementById('instruction');
let instructionVideo = document.getElementById('instruction-video');
let instructionLeft = document.getElementById('instruction-btn-left');
let instructionRight = document.getElementById('instruction-btn-right');
let instructionLength = instructions.length - 1;

// other variables
let currentInstructionIndex;

// start quiz on load
window.addEventListener('load', loadQuiz);

function loadQuiz() {
  initInstructionEventListeners();
}

// event listeners
function initInstructionEventListeners() {
    helpButton.addEventListener('click', selectHelpButton);
    closeButton.addEventListener('click', closeHelp);
    instructionLeft.addEventListener('click', nextInstruction);
    instructionRight.addEventListener('click', prevInstruction);
}

// select help button
function selectHelpButton() {
    popUp.classList.add('active');
    overlay.classList.add('active');
    currentInstructionIndex = 0;
    showInstruction();
    autoRun();
}

// show instruction
function showInstruction() {
    instructionText.innertext = instructions[currentInstructionIndex].text;
    instructionVideo.src = instructions[currentInstructionIndex].videoSrc;
}

// start instruction
function changeImage(x) {
    currentInstructionIndex += x;
    if (currentInstructionIndex === instructionLength) {
        currentInstructionIndex = 0;
    }
    if (currentInstructionIndex == 0) {
        prevInstruction.disabled = true;
    }
    showInstruction();
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
    popUp.classList.remove('active');
    overlay.classList.remove('active');
}