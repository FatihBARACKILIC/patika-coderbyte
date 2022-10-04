function AlphabetSoup(str) {
  return str.split("").sort().join("")
}

// keep this function call here
console.log(AlphabetSoup("coderbyte"))
console.log(AlphabetSoup("hooplah"))
