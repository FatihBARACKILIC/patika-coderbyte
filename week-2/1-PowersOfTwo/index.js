function PowersofTwo(num) {
  for (let i = 1; i <= num; i++) {
    if (2 ** i > num) return false
    else if (2 ** i === num) return true
  }

  return false
}

// keep this function call here
console.log(PowersofTwo(4))
console.log(PowersofTwo(124))
