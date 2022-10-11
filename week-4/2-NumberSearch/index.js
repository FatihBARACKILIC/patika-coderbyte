function NumberSearch(str) {
  try {
    let totalNumber = str
      .match(/[0-9]/g)
      .reduce((prev, curr) => prev + parseInt(curr), 0)
    let letterCount = str.match(/[a-zA-Z]/g).length

    // code goes here
    return Math.round(totalNumber / letterCount)
  } catch (error) {
    return 0
  }
}

// keep this function call here
console.log(NumberSearch("H3ello9-9"))
console.log(NumberSearch("One Number*1*"))
console.log(NumberSearch("Hello6 9World 2, Nic8e D7ay!"))
console.log(NumberSearch("Two Houses"))
console.log(NumberSearch("3Hello9 9 9"))
