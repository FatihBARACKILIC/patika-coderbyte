function StringChallenge(strArr) {
  const str = []
  strArr.map((item) => str.push(...item.split(".")))

  return str.length === 1
}

// keep this function call here
console.log(StringChallenge(["0.232567"]))
console.log(StringChallenge(["2,567.00.2"]))
console.log(StringChallenge(["1,093,222.04"]))
console.log(StringChallenge(["1,093,222.04"]))
console.log(StringChallenge(["1,093,22.04"]))
