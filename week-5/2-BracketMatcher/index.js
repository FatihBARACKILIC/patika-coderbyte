function BracketMatcher(str) {
  const openBracketsCount =
    str.indexOf("(") !== -1 ? str.match(/\(/g).length : 0
  const closeBracketsCount =
    str.indexOf(")") !== -1 ? str.match(/\)/g).length : 0

  return openBracketsCount === closeBracketsCount ? 1 : 0
}

// keep this function call here
console.log(BracketMatcher("(coder)(byte))")) // 0
console.log(BracketMatcher("(c(oder)) b(yte)")) // 1
console.log(BracketMatcher("(hello (world))")) // 1
console.log(BracketMatcher("((hello (world))")) // 0
console.log(BracketMatcher("dogs and cats")) // 1
console.log(BracketMatcher("the color re(d))()(()")) // 0

