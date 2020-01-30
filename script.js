var win = 0;
var lose = 0;
function getPlayer(num){
    var choice = [`ROCK`,`PAPER`,`SCISSOR`];
    var imgRock = `img/rock.png`;
    var imgPaper = `img/paper.png`;
    var imgScissor = `img/scissors.png`;
    var player = choice[num];
    var number = Math.round(Math.random()*2);
    var computer = choice[number];
    var image;
    if (computer == `ROCK`){
        image = imgRock;
    }
    else if (computer == `SCISSOR`){
        image = imgScissor;
    }
    else{
        image = imgPaper;
    }
    document.getElementById(`computer-display`).src = image;
    result(player,computer);
    document.getElementById(`score-win`).innerHTML = `Total Win:` + win;
    document.getElementById(`score-lose`).innerHTML = `Total Lost: ` + lose;
}

function reset(){
    win = 0;
    lose = 0;
    document.getElementById(`score-win`).innerHTML = `Total Win:` + win;
    document.getElementById(`score-lose`).innerHTML = `Total Lost: ` + lose;
    document.getElementById(`computer-display`).src = `img/question.png`;
    document.getElementById(`result`).innerHTML = `Ready?`;
}

function result(player,computer){
    if (player == computer){
        document.getElementById(`result`).innerHTML = `Draw!`;
    }
    else if (player == `ROCK` && computer == `SCISSOR`){
        document.getElementById(`result`).innerHTML = `You win!`;
        win++;
    }
    else if (player == `PAPER` && computer == `ROCK`){
        document.getElementById(`result`).innerHTML = `You win!`;
        win++;
    }
    else if (player == `SCISSOR` && computer == `PAPER`){
        document.getElementById(`result`).innerHTML = `You win!`;
        win++;
    }
    else{
        document.getElementById(`result`).innerHTML = `You Lose!`;
        lose++;
    }
}