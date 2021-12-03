// bad
/*
let sorted: number = Math.floor(Math.random() * 10)
let yourValue = 2

if(yourValue === sorted) {
  console.log('you Winner')
} else {
  console.log('you wrong')
}
*/

// in ifs, use functions

// good code
let sorted: number = Math.floor(Math.random() * 10)
let yourValue = 2

function showYouWinner() {
  console.log('you Winner')
}

function showYouWrong() {
  console.log('you wrong')
}

if(yourValue === sorted) {
  showYouWinner()
} else {
  showYouWrong()
}
