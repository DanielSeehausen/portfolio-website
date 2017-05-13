import side0 from '../data/sides/side_0.js'
import side1 from '../data/sides/side_1.js'
import side2 from '../data/sides/side_2.js'
import side3 from '../data/sides/side_3.js'
import side4 from '../data/sides/side_4.js'
import side5 from '../data/sides/side_5.js'

export const idxToSide = {
  // returns the INITIAL side orientation (i.e. sideIdx 0 facing user)
  0: 'front',
  1: 'right',
  2: 'left',
  3: 'top',
  4: 'bottom',
  5: 'back'
}

export const getSideData = (idx) => {
  // could use object instead like in idxToSide
  // other option is to use eval() and fetch from a dynamic variable name, but I hear it is knotty naughty
  switch (idx) {
    case 0:
      return side0
      break
    case 1:
      return side1
      break
    case 2:
      return side2
      break
    case 3:
      return side3
      break
    case 4:
      return side4
      break
    case 5:
      return side5
      break
    case 6:
      return side6
      break
    default:
      console.error(`Face w/ idx: ${idx} not found! Serving side 0 data...`)
      return side0
      break
  }
}
