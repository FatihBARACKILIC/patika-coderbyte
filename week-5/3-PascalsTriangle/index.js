function PascalsTriangle(arr) {
  if (arr[arr.length - 1] === 1) return -1

  const lineNumber = arr[1]

  const pascalTriangle = [[1], [1, 1]]

  for (let line = 1; line < lineNumber; line++) {
    const prevLine = pascalTriangle[line]
    const newLine = []
    for (let col = 0; col <= line + 1; col++) {
      if (col === 0 || col === line + 1) newLine.push(1)
      else newLine.push(prevLine[col - 1] + prevLine[col])
    }
    pascalTriangle.push(newLine)
  }

  return pascalTriangle[lineNumber][arr.length]
}

// keep this function call here
console.log(PascalsTriangle([1, 3])) // 3
console.log(PascalsTriangle([1, 5, 10, 10])) // 5
console.log(PascalsTriangle([1, 5, 10, 10, 5, 1])) // -1
console.log(PascalsTriangle([1, 6, 15, 20])) // 15
console.log(PascalsTriangle([1, 7, 21, 35, 35])) // 21
console.log(PascalsTriangle([1, 4, 6, 4])) // 1

