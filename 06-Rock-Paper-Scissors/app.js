const game = () => {
  let pScore = 0;
  let cScore = 0;

  // Start the game
  const startGame = () => {
    const playButton = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const matchScreen = document.querySelector(".match");

    playButton.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      matchScreen.classList.add("fadeIn");
    });
  };

  // Play match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");
    //Update Text
    const winner = document.querySelector(".winner");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    // Computer Options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        // Computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          // Calling compareHands function
          compareHands(this.textContent, computerChoice, winner);

          // Update images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
          updateScore();
        }, 2000);

        // Animations
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  // Update score
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
    if (pScore === 5 || cScore === 5) {
      endGame();
    }
  };

  // Compare hands
  const compareHands = (playerChoice, computerChoice, winner) => {
    // Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie!";
      return;
    }

    // Checking for rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player wins!";
        pScore++;
        return;
      } else {
        winner.textContent = "Computer wins!";
        cScore++;
        return;
      }
    }

    // Checking for paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer wins!";
        cScore++;
        return;
      } else {
        winner.textContent = "Player wins!";
        pScore++;
        return;
      }
    }

    // Checking for scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer wins!";
        cScore++;
        return;
      } else {
        winner.textContent = "Player wins!";
        pScore++;
        return;
      }
    }
  };

  // END Screen
  const endGame = () => {
    const endScreen = document.querySelector(".end");
    const startOver = document.querySelector(".end button");
    const endMessage = document.querySelector(".end h1");
    const matchScreen = document.querySelector(".match");
    const textMessage = document.querySelector(".winner");

    if (pScore > cScore) {
      endMessage.textContent = "Player Wins!!!";
    } else if (pScore < cScore) {
      endMessage.textContent = "Computer Wins :(";
    } else {
      endMessage.textContent = "Its a Tie !!!";
    }
    matchScreen.classList.remove("fadeIn");
    endScreen.classList.add("fadeIn");

    startOver.addEventListener("click", () => {
      resetGame();
      matchScreen.classList.add("fadeIn");
      endScreen.classList.remove("fadeIn");
      textMessage.textContent = "Choose an option";
    });
  };

  // reset Game
  const resetGame = () => {
    pScore = 0;
    cScore = 0;
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    playerHand.src = `./assets/rock.png`;
    computerHand.src = `./assets/rock.png`;
    updateScore();
  };

  // Call all the inner functions
  startGame();
  playMatch();
};

// Start the game function
game();
