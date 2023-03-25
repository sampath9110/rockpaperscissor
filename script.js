/*
  Rock Paper Scissors SOLUTION 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  let a=["Rock","paper","Scissors"]
  let k=Math.floor(Math.random()*3)
  return a[k]
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost

  let score
    if(playerChoice==computerChoice){
      score=0
    }
    else if(playerChoice=="Rock" && computerChoice=="Scissors"){
      score=1
    }
    else if(playerChoice=="Paper" && computerChoice=="Rock"){
      score=1
    }
    else if(playerChoice=="Scissors" && computerChoice=="Paper"){
      score=1
    }
    else{
      score=-1
    }
    // All situations where human draws, set `score` to 0

  return score
    // All situations where human wins, set `score` to 1
    // make sure to use else ifs here
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  let a1=document.getElementById("player-score")
    let b=document.getElementById("hands")
    let c=document.getElementById("result")
    a1.innerText=`${Number(a1.innerText) + score}`
    b.innerText=`${playerChoice} vs ${computerChoice}`
    if(score===1){
        c.innerText="You Win!"
    }
    else if(score===0){
      c.innerText="Draw"
    }
    else{
      c.innerText="You Lose!"
    }

    // Hint: on a score of -1
    // You should do result.innerText = 'You Lose!'
    // Don't forget to grab the div with the 'result' id!
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  const c = getComputerChoice()
  const s = getResult(playerChoice.value, c)
  showResult(s, playerChoice.value, c)
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  let k1 = document.querySelectorAll('.rpsButton')

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

  k1.forEach(i => {
    i.onclick = () => onClickRPS(i)
  })

  // Add a click listener to the end game button that runs the endGame() function on click
  let endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame()
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  let result = document.getElementById('result')
  playerScore.innerText = ''
  hands.innerText = ''
  result.innerText = ''
}

playGame()