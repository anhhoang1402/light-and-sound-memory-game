//global constant
//const clueHoldTime = 1000; //how long to hold each clue's light sound
const cluePauseTime = 333; //how long to pause between clues
const nextClueWaitTime = 1000; //how long to wait before playing sequence

//global variables


var progress = 0;

var gamePlaying = false;

var tonePlaying = false;

var volume = 0.5; //between 0 and 1

var guessCounter = 0;

var clueHoldTime = 1000;

var pattern = [];

var mistake = 3;

var interval;
var timer;

let startingMin = 1;
let time = startingMin * 60;
const countdown = document.getElementById("time");



function patternRandomize(){
  pattern = [];
  for (let i = 0; i < 8; i++) {
    pattern.push(Math.floor(Math.random() * 6+1))
  }
  return pattern;
  
}


function startGame() {
  //intialize game variables
  progress = 0;
  gamePlaying = true;
  mistake = 3;
  pattern = patternRandomize();
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  //intialize game variables
  gamePlaying = false;
  clearInterval(interval)
  countdown.innerHTML = `Time left: 1:00`;
  document.getElementById("mistakes").innerHTML = `You have 3 tries left`;
  //swap the start and stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 520,
  6: 620,
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
  document.getElementById("pic" + btn).classList.remove("hidden");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
  document.getElementById("pic" + btn).classList.add("hidden");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}




function updateCountdown(){ 
  const minutes = Math.floor(time/60);
  let seconds = time % 60;
  countdown.innerHTML = `Time left: ${minutes}: ${seconds}`;
  time--; 
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    clueHoldTime = clueHoldTime - 25;
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  
  interval = setInterval(updateCountdown, 1000);
  


  
  
}

function loseGame() {
  clearInterval(interval)
  startingMin = 1;
  time = startingMin * 60;
  if (mistake == 0) {
    stopGame();
    document.getElementById("mistakes").innerHTML = `You have 3 tries left`;
    alert("Game Over. You lost.");
    clearInterval(interval)
    countdown.innerHTML = `Time left: 1:00`;


  }
  else {
      alert(`You have ${mistake} tries left`);
      document.getElementById("mistakes").innerHTML = `You have ${mistake} tries left`;
      playClueSequence();
  }
  
}

function winGame() {
  clearInterval(interval)
  startingMin = 1;
  time = startingMin * 60;
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn) {
  //console.log("user guessed: " + btn);
  lightButton(btn);
  playTone(btn);
  setTimeout(clearButton, 200, btn);
  if (!gamePlaying) {    
    return;
  }

  if (pattern[guessCounter] == btn) {

    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        clearInterval(interval)
        startingMin = 1;
        time = startingMin * 60;
        winGame();
      } else {
        clearInterval(interval)
        startingMin = 1;
        time = startingMin * 60;
        progress++;
        playClueSequence();
      }
    } else {
      //check the next guess
      guessCounter++;
    }
  } else { 
    mistake--;
    loseGame();
  }
}
