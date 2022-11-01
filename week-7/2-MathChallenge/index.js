function MathChallenge(str) {
  let result = 0

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === "1") {
      result += 2 ** ((i - str.length) * -1 - 1)
    }
  }

  return result
}

// keep this function call here
console.log(MathChallenge("100101"))
console.log(MathChallenge("011"))
console.log(MathChallenge("1000"))
