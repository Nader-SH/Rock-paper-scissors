var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var result = document.getElementById("result");

let win = document.querySelector("#win");
let draw = document.querySelector("#draw");
let lose = document.querySelector("#lose");
let restart = document.querySelector("#restart");

restart.addEventListener("click", restartAll);

function restartAll() {
    win.textContent = 0;
    draw.textContent = 0;
    lose.textContent = 0;
    winScore = 0;
    drawScore = 0;
    loseScore = 0;

}

let winScore = 0;
let drawScore = 0;
let loseScore = 0;


function ourComputerChoice() {
    var randomObject = ["rock", "paper", "scissors"]
    var myRandomNum = Math.floor(Math.random() * 3);

    if (myRandomNum == 0) {
        return randomObject[0];
    } else if (myRandomNum == 1) {
        return randomObject[1];
    } else {
        return randomObject[2];
    }
};

var myChoice;

function myOurChoice() {
    var ourChoiceHtml = ourComputerChoice();

    if ((myChoice == "rock" && ourChoiceHtml == "scissors") || (myChoice == "scissors" && ourChoiceHtml == "paper") || (myChoice == "paper" && ourChoiceHtml == "rock")) {
        result.innerText = "Your choice = " + myChoice + " " + "==>" + " Computer Choice = " + ourChoiceHtml + "==> " + " You Win 😁 ";
        winScore++;
        win.textContent = winScore;

    } else if (myChoice == ourChoiceHtml) {
        result.innerText = "Try again " + "==>" + " Draw 🙄";
        drawScore++;
        draw.textContent = drawScore;

    } else {
        result.innerText = "Your choice = " + myChoice + " " + "==>" + " Computer Choice = " + ourChoiceHtml + "==> " + "You Loss 🙃";
        loseScore++;
        lose.textContent = loseScore;

    }
}

function rockClick() {
    myChoice = "rock";
    myOurChoice();
}

function paperClick() {
    myChoice = "paper"
    myOurChoice();
}

function scissorsClick() {
    myChoice = "scissors"
    myOurChoice();
}
rock.onclick = rockClick;
paper.onclick = paperClick;
scissors.onclick = scissorsClick;
