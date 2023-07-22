const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const Default_User_Choice = ROCK;
const Result_Draw = 'DRAW';
const Result_Player_Wins = 'Player Wins';
const Result_Computer_Wins = 'Computer Wins ';

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ''
  ).toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invaild choice! We chose ${Default_User_Choice} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = Default_User_Choice) =>
  cChoice === pChoice
    ? Result_Draw
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? Result_Player_Wins
    : Result_Computer_Wins;

// if (cChoice === pChoice) {
//   return Result_Draw;
// } else if (
//   (cChoice === ROCK && pChoice === PAPER) ||
//   (cChoice === PAPER && pChoice === SCISSORS) ||
//   (cChoice === SCISSORS && pChoice === ROCK)
// ) {
//   return Result_Player_Wins;
// } else {
//   return Result_Computer_Wins;
// }

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting ...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }
  let message = `You picked ${
    playerChoice || Default_User_Choice
  }, computer picked ${computerChoice}, therefore you `;
  if (winner === Result_Draw) {
    message = message + 'had a draw.';
  } else if (winner === Result_Player_Wins) {
    message = message + 'won.';
  } else {
    message = message + 'lost.';
  }
  alert(message);
  gameIsRunning = false;
});

//// not related to game

const combime = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    if (operation === 'ADD') {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }
  resultHandler(sum);
};

// const subtractUp = function (resultHandler, ...numbers) {
//   let sum = 0;
//   for (const num of numbers) {
//     sum += num;
//   }
//   resultHandler(sum, 'The result after adding all numbers is');
// };

const showResult = (messageText, result) => {
  alert(messageText + ' ' + result);
};

combime(
  showResult.bind(this, 'The result after adding all numbers is'),
  'ADD',
  1,
  5,
  'fd;ld',
  -3,
  6,
  10
);
combime(
  showResult.bind(this, 'The result after adding all numbers is'),
  'ADD',
  1,
  5,
  10,
  -3,
  6,
  10,
  25,
  88
);
combime(
  showResult.bind(this, 'The result after subtracting all numbers is'),
  'SUBTRACT',
  1,
  10,
  15,
  20
);
