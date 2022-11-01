function StringChallenge(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  for (let i = 0; i < str.length; i++) {
    console.log(str[i].match(/[A-Z]/))
  }

  return alphabet
}

// keep this function call here
console.log(StringChallenge("bcdefghijklmnopqrstN"))
console.log(StringChallenge("abSbaSaNbR"))
