//instructions
let instructions = [{
    text: "Read the question and select the button with the most appropriate answer.",
    videoSrc: "assets/videos/instruction1.gif",
    alt: "Instructional video of selecting answer."
},
{
    text: "The selected answer will turn green and the next button will become active to allow you to move onto the next question.",
    videoSrc: "assets/videos/instruction2.gif",
    alt: "Instructional video of submitting answer."
},
{
    text: "If you want to change your answer, please use the reset question button which will allow you to amend your answer.",
    videoSrc: "assets/videos/instruction3.gif",
    alt: "Instructional video of resetting selection."
},
{
    text: "The question counter in the top right hand corner, lets you know your progress through the quiz.",
    videoSrc: "assets/videos/instruction4.gif",
    alt: "Instructional video detailing progress bar."
},
{
    text: "On the last question, the 'submit' button appears allowing you to submit your answers and get your result!",
    videoSrc: "assets/videos/instruction5.gif",
    alt: "Instructional video of submitting quiz answers."
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
    instructionLeft.addEventListener('click', prevInstruction);
    instructionRight.addEventListener('click', nextInstruction);
}

// select help button
function selectHelpButton() {
    popUp.classList.add('active');
    overlay.classList.add('active');
    currentInstructionIndex = 0;
    showInstruction(instructions[currentInstructionIndex]);
}

// show instruction
function showInstruction(instruction) {
    instructionText.innerText = instruction.text;
    instructionVideo.src = instruction.videoSrc;
    instructionVideo.alt = instruction.alt;
}

// start instruction
function changeImage(x) {
    // set new instruction index value
    currentInstructionIndex += x;
    // if last instruction, set next button to inactive
    if (currentInstructionIndex === instructions.length) {
        currentInstructionIndex = 0;
    }
    // if first instruction, set previous button to inactive
    else if (currentInstructionIndex === -1) {
        currentInstructionIndex = instructionLength;
    }
    showInstruction(instructions[currentInstructionIndex]);
}

// next instruction
function nextInstruction() {
    changeImage(1);
}

// previous instruction
function prevInstruction() {
    changeImage(-1);
}

// close help
function closeHelp() {
    popUp.classList.remove('active');
    overlay.classList.remove('active');
}