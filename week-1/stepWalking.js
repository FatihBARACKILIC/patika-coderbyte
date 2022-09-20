// https://www.youtube.com/watch?v=wMhi44o5ljQ&ab_channel=DUMANAKADEM%C4%B0

function StepWalking(num) {
  let firstNumber = 1
  let secondNumber = 2
  let nextNumber = 0
  if (typeof num !== "number" || num < 1 || num > 1000) return 0
  else if (num === 1) return firstNumber
  else if (num === 2) return secondNumber
  else {
    for (let i = 1; i <= num - 2; i++) {
      nextNumber = firstNumber + secondNumber
      firstNumber = secondNumber
      secondNumber = nextNumber
    }
  }

  // code goes here
  return secondNumber
}

// keep this function call here
console.log(StepWalking(1))
console.log(StepWalking(2))
console.log(StepWalking(3))
console.log(StepWalking(9))
console.log(StepWalking(5))
console.log(StepWalking(6))
console.log(StepWalking(7))
console.log(StepWalking(100))
console.log(StepWalking(999))
