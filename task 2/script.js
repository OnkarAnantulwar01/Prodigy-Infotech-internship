// script.js
let startTime, updatedTime, difference, timerInterval;
let running = false;
let display = document.getElementById('display');
let laps = document.getElementById('laps');

function updateDisplay() {
  difference = Date.now() - startTime;
  let hrs = Math.floor(difference / 3600000);
  let mins = Math.floor((difference % 3600000) / 60000);
  let secs = Math.floor((difference % 60000) / 1000);
  display.textContent = 
    `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

function pad(unit) {
  return unit < 10 ? '0' + unit : unit;
}

function startStop() {
  if (!running) {
    startTime = Date.now() - (difference || 0);
    timerInterval = setInterval(updateDisplay, 1000);
    running = true;
  }
}

function pause() {
  clearInterval(timerInterval);
  running = false;
}

function reset() {
  clearInterval(timerInterval);
  running = false;
  difference = 0;
  display.textContent = "00:00:00";
  laps.innerHTML = '';
}

function lap() {
  if (running) {
    let lapTime = display.textContent;
    let li = document.createElement("li");
    li.textContent = lapTime;
    laps.appendChild(li);
  }
}
