let userScore = 0;
let CompScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userSPara = document.querySelector("#user-score");
const compSPara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const rdmIdx = Math.floor(Math.random() * 3);
    return options[rdmIdx];
}

const drawGame = () => {
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userSPara.innerText = userScore;
        msg.innerText = "You win";
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
    } else {
        CompScore++;
        compSPara.innerText = CompScore;
        msg.innerText = "You lose"
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});