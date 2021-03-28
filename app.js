const game = () => {
    let pScore = 0
    let cScore = 0

    // Start the game
    const startGame = () => {
        const playButton = document.querySelector('.intro button')
        const introScreen = document.querySelector('.intro')
        const match = document.querySelector('.match')

        playButton.addEventListener('click', () => {
            introScreen.classList.add('fadeOut')
            match.classList.add('fadeIn')
        })
    }

    // Play match 
    const playMatch = () => {
        const options = document.querySelectorAll('.options button')
        const playerHand = document.querySelector('.player-hand')
        const computerHand = document.querySelector('.computer-hand')
        const hands = document.querySelectorAll('.hands img')

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation= ""
            })
        })

        // Computer options
        const computerOptions = ['rock', 'paper', 'scissors']
        options.forEach(option => {
            option.addEventListener('click', function(){
                // Computer choice
                const computerNumber = Math.floor(Math.random() * 3)
                const computerChoice = computerOptions[computerNumber]

                setTimeout(() => {
                   // Here is where we call compare
                    compareHands(this.textContent, computerChoice)
                    // Update images
                    playerHand.src = `./assets/${this.textContent}.png`
                    computerHand.src = `./assets/${computerChoice}.png` 
                }, 2000);

                // Animations
                playerHand.style.animation = "shakePlayer 2s ease"
                computerHand.style.animation = "shakeComputer 2s ease"
            })
        })
    }

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p')
        const computerScore = document.querySelector('.computer-score p')
        playerScore.textContent = pScore
        computerScore.textContent = cScore
    }

    const compareHands = (playerChoice, computerChoice) => {
        // Update text
        const winner = document.querySelector('.winner')

        //Checking for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = 'It is a tie!'
            return
        }
        
        // Check for rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = "You win!"
                pScore++
                updateScore()
                return
            } else {
                winner.textContent = "Computer wins!"
                cScore++
                updateScore()
                return
            }
        }

        // check for paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = "Computer win!"
                cScore++
                updateScore()
                return
            } else {
                winner.textContent = "You win!"
                pScore++
                updateScore()
                return
            }
        }

        // Check for scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = "Computer wins!"
                cScore++
                updateScore()
                return
            } else {
                winner.textContent = "You win!"
                pScore++
                updateScore()
                return
            }
        }
    }

    // Is call all the inner function
    startGame()
    playMatch()
}

// Start the game function
game()