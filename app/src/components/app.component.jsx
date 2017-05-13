import React, { Component } from 'react'
import { render } from 'react-dom'
import Cube from './cube.component.jsx'
import Tile from './tile.component.jsx'
import Background from './background.component.jsx'
import activateGuide from '../helpers/guideMe.js'
import { getTileData } from '../helpers/tileDataMapper.js'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      activeFaceIdx: 0,
      defaultCube: 'home-cube',
    }
  }

  render() {
    let guide = null
    if (!localStorage.getItem("repeatVisit")) {
      activateGuide(this.state.defaultCube)
      guide = <h2 id="guide-me">WASD or Click to Navigate</h2>
      localStorage.setItem("repeatVisit", true)
    }
    const tiles = [...Array(8)].map((_, tileIdx) => {
      let tileData = getTileData(tileIdx)
      return <Tile key={tileIdx} tileIdx={tileIdx} tileData={tileData} />
    })
    console.log(tiles)

    return (
      <div>
        {guide}
        <Cube cubeName={this.state.defaultCube} />
        {tiles}
      </div>
    )
  }
}
