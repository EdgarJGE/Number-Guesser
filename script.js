let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//Funcion para generar el target number
const generateTarget = () => Math.floor(Math.random() * 10);

//console.log(generateTarget());

const getAbsoluteDistance = (num, target) => Math.abs(num - target);

//Compara los numeros dados para ver quien es el ganador
const compareGuesses = (user, computer, target) => {
    if (user < 0 || user > 9) {
        alert('Your number is out of range');
    } else {
        const compareUser = getAbsoluteDistance(user, target);
        const compareComputer = getAbsoluteDistance(computer, target);
        if (compareUser < compareComputer || compareComputer === compareUser) {
            return true;
        } else {
            return false;
        }
    }
}

//Actualiza el score sumandole 1 al ganador
const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}

//Funcion para vanzar a la siguiente ronda
const advanceRound = () => {
    currentRoundNumber++;
}
