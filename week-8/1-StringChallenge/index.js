function StringChallenge(str) {
  let alphabet = [0]

  for (let i = 0; i < 26; i++) alphabet.push((i + 10).toString(36))
  alphabet.forEach((item) => str.includes(item) && alphabet[0]++)

  return alphabet[0] == 26
}

console.log(StringChallenge("abcdefghijklmnopqrstuvwxyyyy"))
console.log(StringChallenge("abc123456kmo"))
console.log(StringChallenge("zacxyjbbkfgtbhdaielqrm45pnsowtuv"))
