//> My Answer 6/10
// function trimNegativeNumbers(arr) {
//   let start = 0
//   let end = arr.length - 1
//   arr = arr.filter((value, index) => {
//     if (value < 0 && index <= start) start = index
//     else if (value < 0 && index >= end) end = index
//     else return value
//   })

//   return arr
// }

// function MaxSubarray(arr) {
//   arr = trimNegativeNumbers(arr)

//   let newArr = [...arr]
//   let min = Math.min(...arr)
//   const minIndex = newArr.findIndex((val) => val === min)
//   let sum = 0
//   for (let i = 0; i <= minIndex; i++) {
//     sum += arr[i]
//   }

//   if (sum < 0) {
//     newArr = newArr.filter((number, index) => index > minIndex)
//   }

//   return newArr.reduce((a, b) => a + b, 0)
// }

//> Best answer 10/10
function MaxSubarray(arr) {
  let max = 0
  let sum = 0

  arr.map((number) => {
    sum += number
    max = Math.max(max, sum)
    if (sum < 0) sum = 0
  })
  return max
}

// keep this function call here
console.log(MaxSubarray([-2, 0, 5, -1, 7, -3])) // 11
console.log(MaxSubarray([1, -2, 0, 3])) // 3
console.log(MaxSubarray([3, -1, -1, 4, 3, -1])) // 8
