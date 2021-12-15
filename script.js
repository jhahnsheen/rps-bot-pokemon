// Battle Start Text
window.alert("Wild RPS BOT appeared!");
window.alert("Go! Hand!");

// Set HP values
var wins = 0;
var losses = 0;

// Battle Selection Loop
var continuePlay = true;

while(continuePlay === true) {

    var rps = ["R", "P", "S"];
    
    window.alert("You have " + (10-losses) + " HP. Wild RPS BOT has " + (10-wins) + " HP.");

    var playerChoice = window.prompt("What should Hand do? Rock (R), Paper (P), Scissors (S), RUN");
    playerChoice = playerChoice.toUpperCase();

    var botChoice = rps[Math.floor(Math.random() * 3)]

    function battleChoiceDialogue() {
        window.alert("You chose " + playerChoice + "!");
        window.alert("RPS Bot chose " + botChoice + "!");
    }

    if(playerChoice === "RUN"){
        continuePlay = false;
    }else if(playerChoice === botChoice) {
        battleChoiceDialogue();
        window.alert("It doesn't affect RPS Bot...");
        var continuePlay = window.confirm("Send out next Hand?");
    }else if(
        (botChoice === "R" && playerChoice === "P") ||
        (botChoice === "P" && playerChoice === "S") ||
        (botChoice === "S" && playerChoice === "R")) {
            battleChoiceDialogue();
            window.alert("It's super effective!");
            wins++;
            if(wins !== 10) {
                var continuePlay = window.confirm("Send out next Hand?");
            } else {
                continuePlay = false;
            }
    }else{
        battleChoiceDialogue();
        window.alert("It's not very effective...");
        losses++;
        if(losses !== 10) {
            var continuePlay = window.confirm("Send out next Hand?");
        } else {
            continuePlay = false;
        }
    }
   
}

// end of battle has three outcomes, player wins, loses or runs away before conclusion of battle
if(wins === 10 && losses < 10) {
    window.alert("Wild RPS BOT fainted")
    window.alert("You gain 58 experience points!")
} else if(losses === 10 && wins < 10) {
    window.alert("You are out of HP!");
    window.alert("You blacked out!");
} else {
    window.alert("You got away safely!");
}