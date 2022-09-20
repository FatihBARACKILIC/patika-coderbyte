function FizzBuzz(num) {
  let fizzBuzz = ""
  for (let i = 1; i <= +num; i++) {
    if (i % 3 === 0 && i % 5 === 0) fizzBuzz += "FizzBuzz "
    else if (i % 5 === 0) fizzBuzz += "Buzz "
    else if (i % 3 === 0) fizzBuzz += "Fizz "
    else fizzBuzz += i + " "
  }

  // code goes here
  return fizzBuzz.trim()
}

// keep this function call here
console.log(FizzBuzz(16))
