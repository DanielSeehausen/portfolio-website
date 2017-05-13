import cubeConfig from '../config/cubeConfig.js'
import rotationMapper from './rotationMapper.js'

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
var vanillaCube = null
export var locked = false

function lock() {
  locked = true
}

function unlock() {
  locked = false
}

export function setCube(jQCube, vanillaCube) {
  $cube = jQCube
  vanillaCube = vanillaCube
}

function getEndPos(startPos, vector) {
  return [
    startPos[0] + vector[0],
    startPos[1] + vector[1],
    startPos[2] + vector[2]
  ]
}

// TODO: there is a better way to tie the cube with the animator (passing lock/unlock seems sloppy slop)
// this library is incredible and being used (after trying many different options, this was the best because of how it handles accumulating rotations)
// https://github.com/rstacruz/jquery.transit#readme
export function rotateCube(startIdx, endIdx) {
  if (locked) return
  lock()
  const vector = rotationMapper[startIdx][endIdx]
  $cube.transition({
    rotateX: `+=${vector[0]}`,
    rotateY: `+=${vector[1]}`,
    rotateZ: `+=${vector[2]}`,
    duration: 750,
    easing: 'in-out',
    complete: () => unlock()
  });
}

const tileGroups = [[3, 2, 1, 0], [4, 5, 6, 7]]

const tileVectors = [
  [254, 0],
  [254, -254],
  [0, -254],
  [-254, -254]
]

function unfoldTiles(i = 0) {
  if (i === tileVectors.length) {
    unlock()
    return
  }
  for (let curr = i; curr < tileVectors.length; curr++) {
    let p = curr
    $(`#tile-${tileGroups[0][curr]}`).transition({
      x: tileVectors[i][0],
      y: tileVectors[i][1],
      duration: 500,
      easing: 'in-out',
    })
    $(`#tile-${tileGroups[1][curr]}`).transition({
      x: tileVectors[i][0]*-1,
      y: tileVectors[i][1]*-1,
      duration: 500,
      easing: 'in-out',
      complete: () => {
        if (curr === tileVectors.length-1)
          unfoldTiles(i += 1)
      }
    })
  }
}

export function flattenCube() {
  if (locked) return
  lock() // is unlocked at the end of unfold tiles
  $(".oscillation-wrapper").removeClass("oscillate")
  $('.cube-container').transition({
    transform: `scale(.35)`,
    duration: 500,
    easing: 'in-out',
    complete: () => unfoldTiles()
  })
}

export function foldCube() {
  if (locked) return
  lock()
  $(".oscillation-wrapper").addClass("oscillate")
  $('.cube-container').transition({
    transform: `scale(1)`,
    duration: 500,
    easing: 'in-out',
    complete: () => unlock()
  })

}
