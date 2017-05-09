import React, { Component } from 'react'
import { render } from 'react-dom'
import CubeMover from '../cubeMover.component.jsx'
import destinationMapper from '../../helpers/destinationMapper.js'
import { idxToFace } from '../../helpers/faceDataMapper.js'

export default class Side extends Component {
  constructor() {
    super()
  }

  render() {
    const cubeMovers = ["rechts", "links", "unten", "oben", "gegenUeber"].map((destinationName, idx) => {
        return <CubeMover key={idx} destinationName={destinationName} onClick={() => this.props.rotateCube(destinationMapper[this.props.sideIdx][destinationName])}/>
    })
    const faceName = idxToFace[this.props.sideIdx]

    return (
      <div id={`${faceName}-side`} className="side">
        <div id={`${faceName}-face`} className="face">
          {cubeMovers}
        </div>
      </div>
    )
  }
}
