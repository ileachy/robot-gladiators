// creates function named "fight"
var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// you can also log values like console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;
var promptFight = window.prompt(
  "Would you light to FIGHT or SKIP this battle? Enter 'FIGHT' or  'SKIP' to choose."
);

var fight = function () {
  window.alert("Welcome to Robot Gladiators!");
  window;
};

fight();

if (promptFight === "fight" || promptFight === "FIGHT") {
  enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName +
      " attacked " +
      enemyName +
      " . " +
      enemyName +
      " now has " +
      enemyHealth +
      " health remaining "
  );

  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  playerHealth = playerHealth - enemyAttack;
  console.log(
    enemyName +
      " attacked " +
      playerName +
      " . " +
      playerName +
      " now has " +
      playerHealth +
      " health remaining "
  );

  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
} else if (promptFight === "skip" || promptFight === "SKIP") {
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");

  // if true leave fight
  if (confirmSkip) {
    window.alert(playerName + " has decided to skip the fight. Goodbye!");
    playerMoney = playerMoney - 2;
  }
  // if false loop to fight function
  else {
    fight();
  }
} else {
  window.alert("you need to choose a valid option. try again!");
}
