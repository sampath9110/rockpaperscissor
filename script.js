
function getComputerChoice() {
  let a=["Rock","paper","Scissors"]
  let k=Math.floor(Math.random()*3)
  return a[k]
}

function getResult(playerChoice, computerChoice) {

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

  return score

}
function showResult(score, playerChoice, computerChoice) {
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
}

function onClickRPS(playerChoice) {
  const c = getComputerChoice()
  const s = getResult(playerChoice.value, c)
  showResult(s, playerChoice.value, c)
}
function playGame() {
  let k1 = document.querySelectorAll('.rpsButton')

  k1.forEach(i => {
    i.onclick = () => onClickRPS(i)
  })
  let endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame()
}

function endGame() {
  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  let result = document.getElementById('result')
  playerScore.innerText = ''
  hands.innerText = ''
  result.innerText = ''
}

playGame()
