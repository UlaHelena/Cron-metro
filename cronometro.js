/* let number = 10;

function countdown() {
  if (number == 0) {
    alert("Seu tempo acabou");
    clearTimeout(time);
  } else {
    number--;
    alert(number);
  }
}
const time = setInterval(countdown, 1000); */

let time = 11;
let timer;
let countdownTimer = document.getElementById("countdownTimer");

function startTimer() {
  timer = setInterval(countdown, 1000);
}

function countdown() {
  if (time == 0) {
    countdownTimer.innerText = "Seu tempo acabou!";
    clearTimeout(timer);
    console.log("Seu tempo acabou");
  } else {
    time--;
    countdownTimer.innerText = `${time}`;
    console.log(`${time}`);
  }
}
