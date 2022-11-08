function MathChallenge(num) {
  for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
    let pow = i ** 2
    if (pow.toString().length === num) return i
  }
  return 0
}

// keep this function call here
console.log(MathChallenge(2))
console.log(MathChallenge(1))
console.log(MathChallenge(6))
