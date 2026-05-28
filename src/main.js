let score = 99

let clicker = document.getElementById("clicker")

let scoreDisplay = document.getElementById("scoreDisplay")

function updateScore (amount) {
  score += amount
  scoreDisplay.innerText = score.toFixed(0) + ' rpm' 
}

clicker.addEventListener("click", function () {
  let clickAmt = 1 + (cylinders ** 1.05)

  updateScore(clickAmt)
})

let upgradeOne = document.getElementById("upgradeOne")
let upgradeOneCount = document.getElementById("upgradeOneCount")
let cylinders = 0

upgradeOne.addEventListener("click", function () {
  if (score >= 100) {
     updateScore(-100)
     cylinders++
     upgradeOneCount.innerText = cylinders + " Cylinders"
  } else {
    alert('YOU BROKE')
  }
})