/* Cube side indexes are as follows:
 * front: 0
 * right: 1
 * left: 2
 * top: 3
 * bottom: 4
 * back: 5
 *
 * If it were unfolded from idx 0 (showing wrap to back):
 *
 *        5
 *        3
 *    5 2 0 1 5
 *        4
 *        5
*/

var $cube = null

function rChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const rotationMapper = {
  0: {
    1: 'rotate-right',
    2: 'rotate-left',
    3: 'rotate-up',
    4: 'rotate-down',
    5: rChoice(["rotate-acrossPosX","rotate-acrossPosY","rotate-acrossNegX","rotate-acrossNegY"]),
  },
  1: {
    0: 'rotate-left',
    2: rChoice(["rotate-acrossPosX","rotate-acrossPosY","rotate-acrossNegX","rotate-acrossNegY"]),
    3: 'rotate-up-CCW',
    4: 'rotate-down-CW',
    5: 'rotate-right',
  },
  2: {
    1: rChoice(["rotate-acrossPosX","rotate-acrossPosY","rotate-acrossNegX","rotate-acrossNegY"]),
    0: 'rotate-right',
    3: 'rotate-up-CW',
    4: 'rotate-down-CCW',
    5: 'rotate-left',
  },
  3: {
    1: 'rotate-right-CW',
    2: 'rotate-right-CCW',
    0: 'rotate-down',
    4: rChoice(["rotate-acrossPosX-CW","rotate-acrossPosX-CCW","rotate-acrossNegX-CW","rotate-acrossNegX-CCW"]),
    5: rChoice(["rotate-up-invertCW", "rotate-up-invertCW"]),
  },
  4: {
    1: 'rotate-right-CCW',
    2: 'rotate-right-CW',
    3: rChoice(["rotate-acrossPosX-CW","rotate-acrossPosX-CCW","rotate-acrossNegX-CW","rotate-acrossNegX-CCW"]),
    0: 'rotate-up',
    5: rChoice(["rotate-down-invertCW", "rotate-down-invertCCW"]),
  },
  5: {
    1: 'rotate-left',
    2: 'rotate-right',
    3: rChoice(["rotate-up-invertCW", "rotate-up-invertCCW"]),
    4: rChoice(["rotate-down-invertCW", "rotate-down-invertCCW"]),
    0: rChoice(["rotate-acrossPosX","rotate-acrossPosY","rotate-acrossNegX","rotate-acrossNegY"]),
  }
}

export function setCube(cube) {
  $cube = cube
}

export function rotateCube(startIdx, endIdx) {
  const cssTransform = rotationMapper[startIdx][endIdx]
  console.log(startIdx, endIdx, cssTransform)
  setTimeout(() => {
    console.log('wot')
    $cube.removeClass(cssTransform)
  }, 1500)
  $cube.addClass(cssTransform)

}
