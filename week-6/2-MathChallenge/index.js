function isPrime(number) {
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) return false
  }
  return true
}

function MathChallenge(num) {
  num = num.toString()

  for (let i = 0; i < num.length; i++) {
    for (let k = 0; k < num.length; k++) {
      const newArr = num.split("").filter((item) => item !== num[i])
      newArr.splice(k, 0, num[i])

      if (isPrime(Number(newArr.join(""))) && Number(newArr.join("")) > 1)
        return 1
    }
  }

  return 0
}

// keep this function call here
console.log(MathChallenge(98))
console.log(MathChallenge(598))
console.log(MathChallenge(910))
console.log(MathChallenge(100))
