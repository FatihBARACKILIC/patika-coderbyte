function HamiltonianPath(strArr) {
  let ctrl = "yes"

  strArr[2]
    .replace("(", "")
    .replace(")", "")
    .split(",")
    .map((item, index, arr) => {
      if (arr[index + 1] == undefined) return ctrl
      const firstPath = `${arr[index + 1]}-${item}`
      const secondPath = `${item}-${arr[index + 1]}`
      if (!(strArr[1].includes(firstPath) || strArr[1].includes(secondPath)))
        ctrl = item
    })
  return ctrl
}

// keep this function call here
console.log(HamiltonianPath(["(A,B,C)", "(B-A,C-B)", "(C,B,A)"]))
console.log(HamiltonianPath(["(X,Y,Z,Q)", "(X-Y,Y-Q,Y-Z)", "(Z,Y,Q,X)"]))
console.log(HamiltonianPath(["(a,b,c,d)", "(a-b,a-d,b-d,b-c)", "(d,a,b,c)"]))
console.log(HamiltonianPath(["(a,b,c,d)", "(a-c,b-c,d-c)", "(d,c,a,b)"]))
