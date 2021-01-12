// TODO: write a function that plays 5 round game
// that keeps score and reports win/lose at the end
function game() {
  let playerWin = 0
  let computerWin = 0

  for (let i = 0; i < 5; i++) {
    const playerInput = prompt('Rock, paper, or scissors?')
    const round = playSingleRound(playerInput, computerPlay())

    if (round.indexOf('Win') !== -1) playerWin++
    else if (round.indexOf('Lose') !== -1) computerWin++

    console.log(round)
  }

  console.log(`Player score: ${playerWin}`)
  console.log(`Computer score: ${computerWin}`)
  if (playerWin > computerWin) console.log('You Win!')
  else if (playerWin < computerWin) console.log('You Lose!')
  else console.log('Tie!')
}

// TODO: write a function that plays a single round of Rock Paper Scissors
function playSingleRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()
  computerSelection = computerSelection.toLowerCase()

  // player wins
  if (
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'rock' && computerSelection === 'scissors')
  )
    return `You Win! ${playerSelection} beats ${computerSelection}`

  // computer wins
  if (
    (computerSelection === 'paper' && playerSelection === 'rock') ||
    (computerSelection === 'scissors' && playerSelection === 'paper') ||
    (computerSelection === 'rock' && playerSelection === 'scissors')
  )
    return `You Win! ${computerSelection} beats ${playerSelection}`

  // tie
  return "It's a tie!"
}

// TODO: randomly return 'Rock' 'Paper' or 'Scissors'
function computerPlay() {
  switch (getRandomInt(1, 3)) {
    case 1:
      return 'Rock'
      break
    case 2:
      return 'Paper'
      break
    case 3:
      return 'Scissors'
      break
    default:
      return 'something terribly wrong happened'
  }
}

// the max & min are inclusive
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}