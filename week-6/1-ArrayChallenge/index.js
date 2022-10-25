function ArrayChallenge(arr) {
  let result = false

  const maxNumber = Math.max(...arr)
  const sumOfNumbers = arr.reduce((sum, curr) => {
    if (curr === maxNumber) return sum
    return sum + curr
  }, 0)

  arr = arr.filter((item) => item !== maxNumber)

  if (maxNumber - sumOfNumbers === 0) result = true

  arr.forEach((item) => {
    if (sumOfNumbers - item === maxNumber) result = true
    if (maxNumber - sumOfNumbers === 0) result = true
  })

  return result
}

// keep this function call here
console.log(ArrayChallenge([1, 2, 3, 4]))
console.log(ArrayChallenge([2, 6, 18]))
console.log(ArrayChallenge([10, 20, 30, 40, 100]))
console.log(ArrayChallenge([10, 12, 500, 1, -5, 1, 0]))
console.log(ArrayChallenge([-2, -3, -4, -1, 100]))
console.log(ArrayChallenge([54, 49, 1, 0, 7, 4]))
console.log(ArrayChallenge([3, 4, 5, 7]))
console.log(ArrayChallenge([1, 1, 1, 1, 6]))
console.log(ArrayChallenge([2, 4, 6, 12, 92]))
console.log(ArrayChallenge([31, 2, 90, 50, 7]))
