function reset() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScore();
};
let score = JSON.parse(localStorage.getItem('score'));

if (score === null) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    }
};

function updateScore() {
    document.querySelector('.js-score').innerHTML = `Wins:${score.wins} Loss:${score.losses} Ties:${score.ties}`;
};

updateScore();

function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'Lose.';

        } else if (computerMove === 'paper') {
            result = 'Win.';

        } else if (computerMove === 'scissors') {
            result = 'Tie.';

        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'paper') {
            result = 'Tie.';

        } else if (computerMove === 'scissors') {
            result = 'Lose.';

        } else if (computerMove === 'rock') {
            result = 'Win.';

        }
    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.';
        } else if (computerMove === 'paper') {
            result = 'Lose.';
        } else if (computerMove === 'scissors') {
            result = 'Win.';
        }
    }
    if (result === 'Win.') {
        score.wins += 1;
    } else if (result === 'Lose.') {
        score.losses += 1;
    } else if (result === 'Tie.') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-picks').innerHTML = `You <img src="rock-paper-scissors img/Rock_files/${playerMove}-emoji.png" class="move-icon">
     <img src="rock-paper-scissors img/Rock_files/${computerMove}-emoji.png" class="move-icon"> Computer`;



    updateScore();

}




function pickComputerMove() {
    const ranndomNumber3 = Math.random();

    let computerMove = '';

    if (ranndomNumber3 >= 0 && ranndomNumber3 < 1 / 3) {
        computerMove = 'rock';
    } else if (ranndomNumber3 >= 1 / 3 && ranndomNumber3 < 2 / 3) {
        computerMove = 'paper';
    } else if (ranndomNumber3 >= 2 / 3 && ranndomNumber3 < 1) {
        computerMove = 'scissors';
    }

    return computerMove;




}
JSON.stringify()