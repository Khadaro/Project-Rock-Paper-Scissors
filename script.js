let PlayerScore = 0;
let compScore = 0;


const computerPlay = () => {
    const arrOfChoices= ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * 3)
    const compChoice= arrOfChoices[randomNum]
    return compChoice
}

const playRound = (playerSelection, ComputerSelection) => {
    console.log('1 ', playerSelection, '2 ', ComptuterSelection)
    if (playerSelection === 'rock' && computerSelectin==='rock'){
        return 'You tied! You both picked rocks'
    } else if (playerSelection === 'scissors' && ComptuterSelection=== 'scissors'){
        return 'You tied! You both picked scissors'
    }else if (playerSelection === 'paper' && ComptuterSelection=== 'paper'){
        return 'You tied! You both picked paper'
}else if (playerSelection === 'scissors' && ComptuterSelection=== 'rock'){
    compScore++
    return 'You lost! rock crushes scissors'
}else if (playerSelection === 'scissors' && ComptuterSelection=== 'paper'){
    PlayerScore++
    return 'You won! scissors cuts paper'
}else if (playerSelection === 'rock' && ComptuterSelection=== 'paper'){
    compScore++
    return 'You lost! paper covers rock'
}else if (playerSelection === 'rock' && ComptuterSelection=== 'scissors'){
    PlayerScore++
    return 'You won! rock crushes scissors'
}else if (playerSelection === 'paper' && ComptuterSelection=== 'scissors'){
    compScore++
    return 'You lost! scissors cuts paper'
}else if (playerSelection === 'paper' && ComptuterSelection=== 'rock'){
    PlayerScore++
    return 'You won! Paper covers rock'
}
}

const playerSelection = 'rock'

const game = () => {
    for (let i=0; i<5; i++){
        const playerSelection = prompt ('choose what to throw', 'rock, paper, scissors',).toLowerCase()
        const ComputerSelection = computerPlay()
        playRound(playerSelection, ComputerSelection)
    }
}

if (PlayerScore > compScore){
    return 'You beat the computer! You are genius'
}else if(PlayerScore < compScore){
    return 'you got beaten by the computer! Practice your throws'
} else {
    return 'you tied with computer! Not too shappy'
}