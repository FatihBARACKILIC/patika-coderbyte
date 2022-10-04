function WeightedPath(strArr) {
  const nodeCount = +strArr[0]
  const nodes = strArr.filter((item, i) => i > 0 && i <= nodeCount && item)
  const connections = strArr.splice(nodeCount + 1)

  if (connections.length === 0) return -1

  let path = nodes[0]
  let element = "A"

  for (let i = 0; i < connections.length * 2; i++) {
    const re = new RegExp(`[0-9|${element}]`, "g")

    if (element === nodes[nodes.length - 1]) return path
    let filteredConnections = connections
      .filter((item) => {
        if (
          item.includes(element) &&
          item.replaceAll(re, "").charCodeAt() > item.charCodeAt()
        ) {
          return item
        }
      })
      .sort((first, second) => +first.split("|")[2] - +second.split("|")[2])[0]

    if (!filteredConnections) return -1
    path += "-" + filteredConnections.replaceAll(re, "")
    element = filteredConnections.replaceAll(re, "")
  }

  return path
}

// keep this function call here

console.log(
  WeightedPath(["4", "A", "B", "C", "D", "A|B|2", "C|B|11", "C|D|3", "B|D|2"])
) //> A-B-D
console.log(
  WeightedPath(["4", "x", "y", "z", "w", "x|y|2", "y|z|14", "z|y|31"])
) //> -1
console.log(
  WeightedPath(["4", "A", "B", "C", "D", "A|B|1", "B|D|9", "B|C|3", "C|D|4"])
) //>  A-B-C-D
console.log(
  WeightedPath([
    "7",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "A|B|1",
    "A|E|9",
    "B|C|2",
    "C|D|1",
    "D|F|2",
    "E|D|6",
    "F|G|2",
  ])
) //> A-B-C-D-F-G
