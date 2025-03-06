const time = document.querySelector(".time");
const timer = document.querySelector(".timer");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
//Select elements

//===================================================
let now;

setInterval(() => {
  now = new Date();
  time.innerHTML = `${now.getHours()} : ${checkTime(
    now.getMinutes()
  )} : ${checkTime(now.getSeconds())}`;
}, 1000);
//Set time

//^^^ Digital Clock ^^^

//===================================================
let timeS = 0;
let timeM = 0;
let isTimerRun = false;
let intervalTimer;
function startTimer() {
  isTimerRun = true;
  intervalTimer = setInterval(() => {
    timeS++;
    if (timeS % 60 == 0) {
      timeS = 0;
      timeM++;
    }
    timer.innerHTML = `${checkTime(timeM)}:${checkTime(timeS)}`;
  }, 1000);
}
//start timer

start.addEventListener("click", () => {
  if (!isTimerRun) {
    startTimer();
  }
  //If isTimerRun is false, run the program.
});

function stopTimer() {
  isTimerRun = false;
  clearInterval(intervalTimer);
}
stop.addEventListener("click", () => {
  if (isTimerRun) {
    stopTimer();
  }
  //If isTimerRun is false, run the program.
});
//stop timer

function resetTimer() {
  timeS = 0;
  timeM = 0;
  timer.innerHTML = `${checkTime(timeM)}:${checkTime(timeS)}`;
  stopTimer();
}
reset.addEventListener("click", resetTimer);
//reset timer

//^^^ timer ^^^
//===================================================

function checkTime(num) {
  if (num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}
//Function for check time. 2:4:6 ==> 2:04:06
