import tile0 from '../data/tiles/tile_0.js'
import tile1 from '../data/tiles/tile_1.js'
import tile2 from '../data/tiles/tile_2.js'
import tile3 from '../data/tiles/tile_3.js'
import tile4 from '../data/tiles/tile_4.js'
import tile5 from '../data/tiles/tile_5.js'
import tile6 from '../data/tiles/tile_5.js'
import tile7 from '../data/tiles/tile_7.js'

export const getTileData = (idx) => {
  switch (idx) {
    case 0:
      return tile0
      break
    case 1:
      return tile1
      break
    case 2:
      return tile2
      break
    case 3:
      return tile3
      break
    case 4:
      return tile4
      break
    case 5:
      return tile5
      break
    case 6:
      return tile6
      break
    case 7:
      return tile7
      break
    default:
      console.error(`Tile w/ idx: ${idx} not found! Serving tile 0 data...`)
      return tile0
      break
  }
}
