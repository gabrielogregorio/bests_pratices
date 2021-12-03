// bad loop
let theList = [1, 4, 0, 0, 4]

function returnData() {
  let list = []

  for(let x = 0; x < theList.length; x++) {
    if(theList[x] == 4) {
      list.push(x)
    }
  }
  return list
}

console.log(returnData())


// good loop
let gameBoard = [1, 4, 0, 0, 4]
const FLAGGED = 4

function getFlaggedCells() {
  let flaggedCells = []

  gameBoard.forEach((cell, index) => {
    if(cell === FLAGGED) {
      flaggedCells.push(index)
    }
  })

  return flaggedCells
}

console.log(getFlaggedCells())

/* ======================== */

// bad loop
function copyA2(a1, a2) {
  for(let x = 0; x < a1.length, x++;) {
    a2[x] = a1[x]
  }
}

// good loop
function copyChars(source, destination) {
  for(let x = 0; x < source.length, x++;) {
    destination[x] = source[x]
  }
}
