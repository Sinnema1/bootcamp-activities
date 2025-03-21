let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;

const rps = ["R", "P", "S"];

//Determines the winner
//Create a function that compares the player's choice and the computer's choice, incrementing the score of the winner up to 3
//If the player chooses Rock and the computer chooses Scissors, the player wins
//If the player chooses Paper and the computer chooses Rock, the player wins
//If the player chooses Scissors and the computer chooses Paper, the player wins
//If the player and the computer choose the same option, it's a tie
//Otherwise, the computer wins
function playGame(playerInput, computerChoice) {
    if (playerInput === computerChoice) {
        console.log("It's a tie!");
    } else if (playerInput === "R" && computerChoice === "S") {
        console.log("Player wins!");
        playerScore++;
    } else if (playerInput === "P" && computerChoice === "R") {
        console.log("Player wins!");
        playerScore++;
    } else if (playerInput === "S" && computerChoice === "P") {
        console.log("Player wins!");
        playerScore++;
    } else {
        console.log("Computer wins!");
        computerScore++;
    }

    gamesPlayed++;

    //Display the winner of the game
    if (gamesPlayed === 3) {
        if (playerScore > computerScore) {
            console.log("Player is the overall winner!");
        } else if (computerScore > playerScore) {
            console.log("Computer is the overall winner!");
        } else {
            console.log("The overall game is a tie!");
        }

        // Ask if the player wants to play again
        const playAgain = prompt("Do you want to play again? (yes/no)").toLowerCase();
        if (playAgain === "yes") {
            // Reset scores and games played for a new series of games
            playerScore = 0;
            computerScore = 0;
            gamesPlayed = 0;
            startGame();
        } else {
            console.log("Thanks for playing!");
        }
    } else {
        startGame();
    }
}

//Create a function that randomly generates Rock, Paper, or Scissors
    //Use Math.random() to generate a random number between 0 and 2
    // const randomPct = Math.random();
    // const randomIndex = Math.floor(randomPct * rps.length);
    // const randomIndexGood = Math.floor(randomIndexBad);
    // const computerInput = rps[randomIndexGood];
    function startGame() {
        let playerInput = prompt("Enter R for Rock, P for Paper, or S for Scissors:").toUpperCase();
    
        // Validate the player's choice
        while (!rps.includes(playerInput)) {
            playerInput = prompt("Invalid choice. Please enter R for Rock, P for Paper, or S for Scissors:").toUpperCase();
        }
    
        const computerChoice = rps[Math.floor(Math.random() * rps.length)];
        console.log(`Computer chose: ${computerChoice}`);
        playGame(playerInput, computerChoice);
    }

// Start the game
startGame();