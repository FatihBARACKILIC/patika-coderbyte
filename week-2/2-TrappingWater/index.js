function TrappingWater(arr) {
  const defaultArr = [...arr]
  arr.sort().reverse()

  let firstMax = defaultArr.indexOf(arr[0]),
    secondMax = defaultArr.lastIndexOf(arr[1])

  if (firstMax > secondMax) [secondMax, firstMax] = [firstMax, secondMax]

  let sum = defaultArr.reduce((total, curr, currIndex) => {
    if (firstMax < currIndex && currIndex < secondMax) return total + curr
    else return total
  }, 0)

  return arr[1] * (secondMax - firstMax - 1) - sum
}

// keep this function call here
console.log(TrappingWater([3, 0, 0, 2, 0, 4]))
console.log(TrappingWater([1, 2, 1, 2]))
console.log(TrappingWater([0, 2, 4, 0, 2, 1, 2, 6]))
// console.log(TrappingWater([10, 1, 1, 1, 5, 10])) // 32
// console.log(TrappingWater([4, 5, 6, 7, 6, 5, 4, 12])) // 6
// console.log(TrappingWater([5, 4, 3, 2, 1, 10, 20])) // 10
