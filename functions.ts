type typeState = 'WINNER' | 'OVER' | ''

// bad code
// function make multiples items off low level
function renderGameMain(state: typeState) {
  /* code render board */
  /* code render board */
  /* code render board */
  /* code render board */

  if(state === '') {
    /* code render balls */
    /* code render balls */
    /* code render balls */
    /* code render balls */
  } else if(state === 'WINNER') {
    /* code winner */
    /* code winner */
    /* code winner */
    /* code winner */
  } else {
    /* code game over */
    /* code game over */
    /* code game over */
    /* code game over */
    /* code game over */
    /* code game over */
  }
}

// good code => just one thing
function renderBalls() { /* code render */ }
function renderGameOver() { /* code render */ }
function renderBoard() { /* code render */ }
function renderWinner() { /* code render */ }

// function render the game . => just one thing, render game, not logical
function renderGame(state: typeState) {
  renderBoard()

  if(state === '') {
    return renderBalls()
  }

  if(state === 'WINNER') {
    return renderWinner()
  }
  return renderGameOver()
}
