function ArithGeoII(arr) {
  const arithmetic = arr[1] - arr[0]
  let isNotArithmeticCounter = 0

  for (let i = 1; i < arr.length; i++) {
    if (!(arr[i] - arr[i - 1] === arithmetic)) isNotArithmeticCounter++
  }
  if (!isNotArithmeticCounter) return "Arithmetic"

  const geometric = arr[1] % arr[0] === 0 && arr[1] / arr[0]
  let isNotGeometricCounter = 0

  for (let i = 1; i < arr.length; i++) {
    if (!(arr[i] / arr[i - 1] === geometric)) isNotGeometricCounter++
  }
  if (!isNotGeometricCounter) return "Geometric"

  return -1
}

// keep this function call here
console.log("Arithmetic: " + ArithGeoII([5, 10, 15]), "\n---") // Arithmetic
console.log("Arithmetic: " + ArithGeoII([2, 4, 6, 8]), "\n---") // Arithmetic
console.log("Geometric: " + ArithGeoII([2, 6, 18, 54]), "\n---") // Geometric
console.log("-1: " + ArithGeoII([2, 4, 16, 24]), "\n---") // -1
console.log("-1: " + ArithGeoII([2, 3, 16, 24]), "\n---") // -1
console.log("Arithmetic: " + ArithGeoII([3, 6, 9, 12, 15]), "\n---") // Arithmetic
console.log("Geometric: " + ArithGeoII([3, 9, 27, 81]), "\n---") // Geometric
