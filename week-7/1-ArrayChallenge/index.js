function ArrayChallenge(arr) {
  let total = 0
  arr = arr.map((element) => {
    total += element
    if (element > total - element) return true
    else return false
  })

  return arr.every((item) => item)
}

console.log(ArrayChallenge([1, 2, 3, 4]))
console.log(ArrayChallenge([1, 2, 5, 10]))
console.log(ArrayChallenge([1, 3, 6, 13, 54]))
