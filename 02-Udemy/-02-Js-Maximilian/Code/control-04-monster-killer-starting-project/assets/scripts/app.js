const attackValue = 10;
const monsterAttackValue = 14;
const strongAttackValue = 17;
const healValue = 20;

const Mode_Attack = 'Attack'; //Mode_Attack = 0
const Mode_Strong_Attack = 'Strong_Attack'; //Mode_Strong_Attack = 1
const Log_Event_Player_Attack = 'Player_Attack';
const Log_Event_Player_Strong_Attack = 'Player_Strong_Attack';
const Log_Event_Monster_Attack = 'Monster_Attack';
const Log_Event_Player_Heal = 'Player_Heal';
const Log_Event_Game_Over = 'Game_Over';

function getMaxLifeValues() {
  const enteredValue = prompt('Maximum life foe you and the monster.', '');

  const parsedValue = parseInt(enteredValue);
  if (isNaN(parsedValue) || parsedValue <= 0) {
    throw { message: 'Invalid user input, not a number!' };
  }
  return parsedValue;
}

let chosenMaxLife;

try {
  chosenMaxLife = getMaxLifeValues();
} catch (error) {
  console.log(error);
  chosenMaxLife = 100;
  alert('You entered something wrong, default value of 100 was used.');
  // throw error;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
let battleLog = [];
let lastLoggedEntry;

adjustHealthBars(chosenMaxLife);

function writeToLog(ev, val, monsterHealth, playerHealth) {
  let logEntry = {
    event: ev,
    value: val,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth,
  };

  switch (ev) {
    case Log_Event_Player_Attack:
      logEntry.target = 'Monster';
      break;
    case Log_Event_Player_Strong_Attack:
      logEntry.target = 'Monster';
      break;
    case Log_Event_Monster_Attack:
      logEntry.target = 'Player';
      break;
    case Log_Event_Player_Heal:
      logEntry.target = 'Player';
      break;
    case Log_Event_Game_Over:
      logEntry = {
        event: ev,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
      };
      break;
    default:
      logEntry = {};
  }

  // if (ev === Log_Event_Player_Attack) {
  //   logEntry.target = 'Monster';
  // } else if (ev === Log_Event_Player_Strong_Attack) {
  //   logEntry.target = 'Monster';
  // } else if (ev === Log_Event_Monster_Attack) {
  //   logEntry.target = 'Player';
  // } else if (ev === Log_Event_Player_Heal) {
  //   logEntry.target = 'Player';
  // } else if (ev === Log_Event_Game_Over) {
  //   logEntry = {
  //     event: ev,
  //     value: val,
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth,
  //   };
  // }
  battleLog.push(logEntry);
}

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(monsterAttackValue);
  currentPlayerHealth -= playerDamage;
  writeToLog(
    Log_Event_Monster_Attack,
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert('You would be dead but the bonus life saved you! ');
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won!');
    writeToLog(
      Log_Event_Game_Over,
      'Player Won',
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lost');
    writeToLog(
      Log_Event_Game_Over,
      'Monster Won',
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('You have a draw');
    writeToLog(
      Log_Event_Game_Over,
      'A Draw',
      currentMonsterHealth,
      currentPlayerHealth
    );
  }
  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
  }
}

function attackMonster(mode) {
  const maxDamage = mode === Mode_Attack ? attackValue : strongAttackValue;
  const logEvent =
    mode === Mode_Attack
      ? Log_Event_Player_Attack
      : Log_Event_Player_Strong_Attack;
  // if (mode === Mode_Attack) {
  //   maxDamage = attackValue;
  //   logEvent = Log_Event_Player_Attack;
  // } else if (Mode_Strong_Attack) {
  //   maxDamage = strongAttackValue;
  //   logEvent = Log_Event_Player_Strong_Attack;
  // }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);
  endRound();
}

function attackHandler() {
  attackMonster(Mode_Attack);
}

function strongAttackHandler() {
  attackMonster(Mode_Strong_Attack);
}

function healPlayerHandler() {
  let Heal_Value;
  if (currentPlayerHealth >= chosenMaxLife - healValue) {
    alert("You can't heal to more than your max initial health.");
    Heal_Value = chosenMaxLife - currentPlayerHealth;
  } else {
    Heal_Value = healValue;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  writeToLog(
    Log_Event_Player_Heal,
    healValue,
    currentMonsterHealth,
    currentPlayerHealth
  );
  endRound();
}

function printLogHandler() {
  for (let i = 0; i < 3; i++) {
    console.log('------------------------');
  }
  let j = 0;
  outerWhile: do {
    console.log('Outer', j);
    innerFor: for (let k = 0; k < 5; k++) {
      if (k === 3) {
        // break outerWhile;
        continue outerWhile; // dangerous => Infinite loop!
      }
      console.log('Inner', k);
    }
    j++;
  } while (j < 3);

  // for (let i = 10; i > 0; ) {
  //   i--;
  //   console.log(i);
  // }
  // for (let i = 0; i < battleLog.length; i++ ){
  //   console.log(battleLog[i]);
  // }
  let i = 0;
  for (const logEntry of battleLog) {
    if ((!lastLoggedEntry && lastLoggedEntry !== 0) || lastLoggedEntry === i) {
      console.log(`#${i}`);
      for (const key in logEntry) {
        console.log(`${key} => ${logEntry[key]}`);
      }
      lastLoggedEntry = 1;
    }
    i++;
    break;
  }
}

attackBtn.addEvntListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);
