const faceFromDirectionMapper = {
  front: {
    links: 'left',
    rechts: 'right',
    oben: 'top',
    unten: 'bottom',
    gegenUeber: 'back'
  },
  left: {
    links: 'back',
    rechts: 'front',
    oben: 'top',
    unten: 'bottom',
    gegenUeber: 'right',
  },
  right: {
    links: 'front',
    rechts: 'back',
    oben: 'top',
    unten: 'bottom',
    gegenUeber: 'left',
  },
  top: {
    links: 'left',
    rechts: 'right',
    oben: 'back',
    unten: 'front',
    gegenUeber: 'bottom',
  },
  bottom: {
    links: 'left',
    rechts: 'right',
    oben: 'front',
    unten: 'back',
    gegenUeber: 'top',
  },
  back: {
    links: 'right',
    rechts: 'left',
    oben: 'top',
    unten: 'bottom',
    gegenUeber: 'front',
  }
}

const vectorFromMovementMapper = {
  front: {
    links: [0, 90, 0],
    rechts: [0, -90, 0],
    oben: [-90, 0, 0],
    unten: [90, 0, 0],
    gegenUeber: [0, 180, 0]
  },
  left: {
    links: [0, 90, 0],
    rechts: [0, -90, 0],
    oben: [-90, -90, 0],
    unten: [90, -90, 0],
    gegenUeber: [0, 180, 0],
  },
  right: {
    links: [0, 90, 0],
    rechts: [0, -90, 0],
    oben: [-90, 90, 0],
    unten: [90, 90, 0],
    gegenUeber: [0, 180, 0],
  },
  top: {
    links: [90, 90, 0],
    rechts: [90, -90, 0],
    oben: [90, 180, 0],
    unten: [90, 0, 0],
    gegenUeber: [180, 0, 0],
  },
  bottom: {
    links: [-90, 90, 0],
    rechts: [-90, -90, 0],
    oben: [-90, 0, 0],
    unten: [-90, 180, 0],
    gegenUeber: [180, 0, 0],
  },
  back: {
    links: [0, 90, 0],
    rechts: [0, -90, 0],
    oben: [-90, 180, 0],
    unten: [90, 180, 0],
    gegenUeber: [0, 180, 0],
  }
}

function getEndPos(startPos, vector) {
  return {
    x: startPos.x + vector[0],
    y: startPos.y + vector[1],
    z: startPos.z + vector[2]
  }
}

function animateCube(element, startPos, endPos, duration) {
  element.animate([
    { transform: `rotateX(${startPos.x}deg) rotateY(${startPos.y}deg) rotateZ(${startPos.z}deg)`},
    { transform: `rotateX(${endPos.x}deg) rotateY(${endPos.y}deg) rotateZ(${endPos.z}deg)`}
  ], {
    duration: duration, // ms
    easing: "ease-in-out",
    fill: "forwards"
  })
}

// http://stackoverflow.com/questions/34450835/get-3d-css-rotation-value-from-matrix3d-with-javascript
function matrixToRadians(matrix) {
    var rotateX = 0,
        rotateY = 0,
        rotateZ = 0
    if (matrix !== 'none') {
        // do some magic
        var values = matrix.split('(')[1].split(')')[0].split(','),
            pi = Math.PI,
            sinB = parseFloat(values[8]),
            b = Math.round(Math.asin(sinB) * 180 / pi),
            cosB = Math.cos(b * pi / 180),
            matrixVal10 = parseFloat(values[9]),
            a = Math.round(Math.asin(-matrixVal10 / cosB) * 180 / pi),
            matrixVal1 = parseFloat(values[0]),
            c = Math.round(Math.acos(matrixVal1 / cosB) * 180 / pi)
        rotateX = a
        rotateY = b
        rotateZ = c
    }
    return {
        x: rotateX,
        y: rotateY,
        z: rotateZ
    }
}

function getCurrentRotation(element) {
  let matrix = window.getComputedStyle(element, null).transform
  return matrixToRadians(matrix)
}

export const graphics = {

  rotateCube: (element, cubeState, direction, duration) => {
    // ugly randomizer for direction
    const vector = vectorFromMovementMapper[cubeState.activeFaceName][direction].map((deg) => {
      if (deg === 180)
        deg = Math.random() > 0.5 ? 180 : -180
      return deg
    })
    const startPos = getCurrentRotation(element)
    const endPos = getEndPos(startPos, vector)
    animateCube(element, startPos, endPos, duration)
    return {
      activeFaceName: faceFromDirectionMapper[cubeState.activeFaceName][direction],
    }
  }
  // rotateCube: (element, cubeState, direction, duration) => {
  //   // ugly randomizer for direction
  //   let vector = vectorFromMovementMapper[cubeState.activeFaceName][direction].map((deg) => {
  //     if (deg === 180)
  //       deg = Math.random() > 0.5 ? 180 : -180
  //     return deg
  //   })
  //   const endPos = getEndPos(cubeState.pos, vector)
  //   animateCube(element, cubeState.pos, endPos, duration)
  //   return {
  //     pos: endPos,
  //     activeFaceName: faceFromDirectionMapper[cubeState.activeFaceName][direction],
  //   }
  // }

}
