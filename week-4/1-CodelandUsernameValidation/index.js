function CodelandUsernameValidation(str) {
  if (
    str.length < 4 ||
    25 < str.length ||
    str[0].match(/[a-zA-Z]/i) === null ||
    str.match(/[a-zA-Z1-9_]/g).length < str.length ||
    str[str.length - 1] === "_"
  )
    return false

  return true
}

// keep this function call here
console.log(CodelandUsernameValidation("aa_"))
console.log(CodelandUsernameValidation("u__hello_world123"))
console.log(CodelandUsernameValidation("u__hello_world123!"))
console.log(CodelandUsernameValidation("_2315"))
console.log(CodelandUsernameValidation("asd_"))
