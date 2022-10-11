// https://medium.com/@adematalay/knights-move-on-infinite-chess-board-with-constant-time-and-space-98c1c0748aa6

function QuickKnight(str) {
  let x = parseInt(str[6]) - (parseInt(str[1]) - 1),
    y = parseInt(str[8]) - (parseInt(str[3]) - 1)
  if (x < 0) x += parseInt(str[1])
  if (y < 0) y += parseInt(str[3])
  let move = Math.max(x / 2, y / 2)
  if (x === y) {
    move = Math.ceil(Math.max(x / 2, y / 2, (x + y) / 3))
  }

  // return { move, x, y }
  return move
}

// keep this function call here
console.log(18, "3" == QuickKnight("(2 3)(7 5)")) // 3
console.log(19, "6" == QuickKnight("(1 1)(8 8)")) // 6
console.log(20, "2" == QuickKnight("(2 2)(3 3)")) // 2
console.log(21, "5" == QuickKnight("(3 3)(1 1)")) // 4
console.log(22, "4" == QuickKnight("(3 3)(7 7)")) // 4
console.log(23, "3" == QuickKnight("(3 3)(1 8)")) // 3
console.log(24, "4" == QuickKnight("(1 1)(2 2)")) // 4
console.log(25, "4" == QuickKnight("(1 1)(3 3)")) // 4
console.log(26, "5" == QuickKnight("(1 1)(8 1)")) // 5
console.log(27, "1" == QuickKnight("(7 8)(8 6)")) // 1
console.log(28, "2" == QuickKnight("(6 3)(7 2)")) // 2
console.log(29, "3" == QuickKnight("(1 1)(1 2)")) // 3
