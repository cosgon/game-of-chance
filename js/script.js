const resultRPS = (choose1, choose2) => {
    let draw = "Draw";
    let win = "Win";
    let loss = "Lose";
    
    if (choose1 === choose2) {
        return draw;
    } else if (choose1 === "Rock" && choose2 === "Scissors"){
        return win;
    } else if (choose1 === "Scissors" && choose2 === "Paper"){
        return win;
    } else if (choose1 === "Paper" && choose2 === "Rock"){
        return win;
    } else {
        return loss;
    }
}

const randomChoose = () =>{
    let res = Math.floor(Math.random() * 3) + 1;

    if (res === 1) {
        return "Rock";
    }
    if (res === 2) {
        return "Paper";
    }
    if (res === 3) {
        return "Scissors";
    }
}

const resultPrinter = (player, computer, res) => {
    let result = document.createElement("h2");
    result.id = "resultLine";
    let divResult = document.getElementById("result");
    divResult.appendChild(result);

    document.getElementById("resultLine").innerHTML= `You chose <u>${player}</u> <br> Computer chose <u>${computer}</u> <br> <u>${res}</u>`;
}

const playerChooseRock = () => {
    let player = "Rock"
    let computer = randomChoose();
    let res = resultRPS(player, computer);

    resultPrinter(player, computer, res);
    return res;
}

const playerChoosePaper = () => {
    let player = "Paper"
    let computer = randomChoose();
    let res = resultRPS(player, computer);

    resultPrinter(player, computer, res);
    return res;
}

const playerChooseScissors = () => {
    let player = "Scissors"
    let computer = randomChoose();
    let res = resultRPS(player, computer);

    resultPrinter(player, computer, res);
    return res;
}

document.getElementById("rock").addEventListener("click", playerChooseRock);

document.getElementById("paper").addEventListener("click", playerChoosePaper);

document.getElementById("scissors").addEventListener("click", playerChooseScissors);