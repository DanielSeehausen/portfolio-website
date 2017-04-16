
export const graphics = {

  rotateCube: (element, cubePos, direction) => {
    // the axis is the one that the cube is rotating around (i.e. up/down are around the x axis)
    let startPos, endPos, axis
    //TODO: will need to round to the nearest multiple of 90 once oscillation is implemented
    switch (direction) {
      case "oben":
        startPos = cubePos.xDeg
        endPos = cubePos.xDeg = startPos - 90
        axis = 'X'
        break
      case "unten":
        startPos = cubePos.xDeg
        endPos = cubePos.xDeg = startPos + 90
        axis = 'X'
        break
      case "links":
        startPos = cubePos.yDeg
        endPos = cubePos.yDeg = startPos + 90
        axis = 'Y'
        break
      case "rechts":
        startPos = cubePos.yDeg
        endPos = cubePos.yDeg = startPos - 90
        axis = 'Y'
        break
      case "gegenUeber":
        startPos = cubePos.yDeg
        endPos = cubePos.yDeg = startPos + [180, -180][Math.round(Math.random())]
        axis = 'Y'
        break
    }
    console.log(`rotate${axis}(${startPos})deg`)
    console.log(`rotate${axis}(${endPos})deg`)
    element.animate([
      { transform: `rotate${axis}(${startPos}deg)` },
      { transform: `rotate${axis}(${endPos}deg)` }
    ], {
      duration: 1000, // ms
      easing: "ease-in-out",
      fill: "forwards"
    })

    //TODO needs to round to nearest interval of 90 (for oscillation and the gegenUeber)
    if (Math.abs(endPos) === 360) {
      let newPos = Object.assign({}, cubePos)
      if (axis === 'Y') {
        newPos.yDeg === 0
      } else {
        newPos.xDeg === 0
      }
      return newPos
    }
    return cubePos
  }
}
