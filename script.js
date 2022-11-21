"use strict";
/*

document.querySelector(".label-info").textContent;

console.log(document.querySelector(".result").textContent);
console.log(document.querySelector(".score").textContent);

document.querySelector(".result").textContent= 20
document.querySelector(".score").textContent= 10

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = (message) => {
  document.querySelector(".label-info").textContent = message;
};
document.querySelector(".submit").addEventListener("click", () => {
  const guess = Number(document.querySelector(".input").value);
  console.log(guess);
  //When there is no input
  if (!guess) {
    displayMessage("⚠️⚠️ Not valid!");
  }
  //When the guess is correct
  else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!!!");
    document.querySelector(".result").textContent = secretNumber;
    //change bg
    document.querySelector(".overlay").style.backgroundColor = "green";

    //highscore

    if (score > highScore) {
      highScore = score;
      document.querySelector(".high-score").textContent = highScore;
    }
  }
  //When guess is not equal to secretNumber
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? "Hint: 📈 Too High!!!" : "Hint: 📉 Too Low!!!"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".result").textContent = "💥 You failed";
      document.querySelector(".score").textContent = 0;
      document.querySelector(".overlay").style.backgroundColor = "red";
      document.querySelector(".result").style.width = "25rem";
    }
  }
});
document.querySelector(".play-again").addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".result").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".input").value = "";
  displayMessage("Start guessing");
  document.querySelector("body").style.backgroundColor = "#000";
  document.querySelector(".result").style.width = "10%";
  document.querySelector(".overlay").style.backgroundColor = "transparent";
});
