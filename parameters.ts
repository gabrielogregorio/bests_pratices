// Bad
function drawCircleBad(x, y, ray) {
  return;
}


// Good
type centerType = {
  x: number,
  y: number
}

function drawCircleGood(center: centerType, ray: number) {
  return;
}


// Bad
function functionBab(p1, p2, p3, p4) {

}

// Good
function functionGood(parameter1) {
  
}