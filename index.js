

// bezierWith4Points()
bezierWith5Points()

function bezierWith4Points() {
  let t = 0.8;
  let p0 = { x: 0.5, y: 0.5 }
  let p1 = { x: 3.5, y: 1 }
  let p2 = { x: 2, y: 1 }
  let p3 = { x: 3, y: 4.5 }
  let resultX = Math.pow(t, 3) * (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) + Math.pow(t, 2) * (3 * p0.x - 6 * p1.x + 3 * p2.x) + t * (-3 * p0.x + 3 * p1.x) + p0.x
  let resultY = Math.pow(t, 3) * (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) + Math.pow(t, 2) * (3 * p0.y - 6 * p1.y + 3 * p2.y) + t * (-3 * p0.y + 3 * p1.y) + p0.y
  console.log(resultX)
  console.log(resultY)
}

function bezierWith5Points() {
  let t = 0;
  let p0 = { x: 2, y: 4 }
  let p1 = { x: 5, y: 3 }
  let p2 = { x: 3, y: 6 }
  let p3 = { x: 7, y: 8 }
  let p4 = { x: 2, y: 2 }
  let resultX = Math.pow(t, 4) * (p0.x - 4 * p1.x + 6 * p2.x - 4 * p3.x + p4.x) + Math.pow(t, 3) * (-4 * p0.x + 12 * p1.x - 12 * p2.x + 4 * p3.x) + Math.pow(t, 2) * (6 * p0.x - 12 * p1.x + 6 * p2.x) + t * (-4 * p0.x + 4 * p1.x) + p0.x
  let resultY = Math.pow(t, 4) * (p0.y - 4 * p1.y + 6 * p2.y - 4 * p3.y + p4.y) + Math.pow(t, 3) * (-4 * p0.y + 12 * p1.y - 12 * p2.y + 4 * p3.y) + Math.pow(t, 2) * (6 * p0.y - 12 * p1.y + 6 * p2.y) + t * (-4 * p0.y + 4 * p1.y) + p0.y
  console.log(resultX)
  console.log(resultY)
}  