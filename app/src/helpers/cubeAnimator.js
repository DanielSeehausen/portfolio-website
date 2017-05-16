import cubeConfig from '../config/cubeConfig.js'
import rotationMapper from './rotationMapper.js'

/* Cube side indexes are as follows:
 *  front: 0
 *  right: 1
 *   left: 2
 *    top: 3
 * bottom: 4
 *   back: 5
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
    duration: 500,
    easing: 'in-out',
    complete: () => unlock()
  });
}

const tileGroups = [[3, 2, 1, 0], [4, 5, 6, 7]]
const rTileGroups = [[0, 1, 2, 3], [7, 6, 5, 4]]

const tileVectors = [
  [254, 0],
  [254, -254],
  [0, -254],
  [-254, -254]
]

const rTileVectors = [
  [0, -254],
  [254, -254],
  [254, 0],
  [0, 0],
]

//TODO refactor these -- can combine them
function unfoldTiles(i = 0) {

  // Function is recursive -- this is our end condition (all tiles are in their place)
  if (i === tileVectors.length) {
    unlock()
    return
  }

  // function iterates through the list of tiles, moving from the current tile index to the end of the list.
  // each time it recurs, it is called with the rest of the list of tiles (excluding the one that it started on for this iteration)
  // e.g. [1, 2, 3, 4] --> [2, 3, 4] --> [3, 4] --> etc.
  // important to remember it is acting on pairs (there are two unfolding tile groups).
  for (let curr = i; curr < tileVectors.length; curr++) {
    $(`#tile-${tileGroups[0][curr]}`).transition({
      x: tileVectors[i][0],
      y: tileVectors[i][1],
      duration: 250,
      easing: 'in-out',
    })
    $(`#tile-${tileGroups[1][curr]}`).transition({
      x: tileVectors[i][0]*-1,
      y: tileVectors[i][1]*-1,
      duration: 250,
      easing: 'in-out',
      complete: () => {
        if (curr === tileVectors.length-1)
          unfoldTiles(i += 1)
      }
    })
  }
}

function foldTiles(i = 0) {

  // Function is recursive -- this is our end condition (all tiles are in their place)
  if (i === tileVectors.length) {
    $(".oscillation-wrapper").addClass("oscillate")
    $('.cube-container').transition({
      transform: `scale(1)`,
      duration: 250,
      easing: 'in-out',
      complete: () => {
        unlock()
      }
    })
    return
  }

  for (let curr = 0; curr <= i ; curr++) {
    $(`#tile-${rTileGroups[0][curr]}`).transition({
      x: rTileVectors[i][0],
      y: rTileVectors[i][1],
      duration: 250,
      easing: 'in-out',
    })
    $(`#tile-${rTileGroups[1][curr]}`).transition({
      x: rTileVectors[i][0]*-1,
      y: rTileVectors[i][1]*-1,
      duration: 250,
      easing: 'in-out',
      complete: () => {
        if (curr === i)
          foldTiles(i += 1)
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
  foldTiles()
}
