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
var reactCube = null

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

function animateRotation(vector) {
  // this library is incredible: https://github.com/rstacruz/jquery.transit#readme
  console.log(reactCube)
  $cube.transition({
    rotateX: `+=${vector[0]}`,
    rotateY: `+=${vector[1]}`,
    rotateZ: `+=${vector[2]}`,
    duration: 750,
    easing: 'in-out',
    complete: () => reactCube.unlock()
  });
}

// TODO: there is a better way to tie the cube with the animator (passing lock/unlock seems sloppy slop)
// this library is incredible and being used (after trying many different options, this was the best because of how it handles accumulating rotations)
// https://github.com/rstacruz/jquery.transit#readme
export function rotateCube(startIdx, endIdx, lockCube, unlockCube) {
  lockCube()
  const vector = rotationMapper[startIdx][endIdx]
  console.log("vect", vector)
  $cube.transition({
    rotateX: `+=${vector[0]}`,
    rotateY: `+=${vector[1]}`,
    rotateZ: `+=${vector[2]}`,
    duration: 750,
    easing: 'in-out',
    complete: () => unlockCube()
  });
}
