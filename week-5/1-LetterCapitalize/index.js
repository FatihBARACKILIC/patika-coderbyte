function LetterCapitalize(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ")
}

// keep this function call here
console.log(LetterCapitalize("hello world"))
console.log(LetterCapitalize("i ran there"))
