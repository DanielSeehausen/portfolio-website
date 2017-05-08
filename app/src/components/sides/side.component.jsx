import React, { Component } from 'react'
import { render } from 'react-dom'
import ExpandedSide from './expanded-sides/expandedSide.component.jsx'
import CubeMover from '../cubeMover.component.jsx'
import destinationMapper from '../../helpers/destinationMapper.js'

export default class Side extends Component {
  constructor() {
    super()
  }

  render() {
    const cssClasses = `side ${this.props.faceName}`
    const cubeMovers = ["rechts", "links", "unten", "oben", "gegenUeber"].map((destinationName, idx) => {
        return <CubeMover key={idx} destinationName={destinationName} onClick={() => this.props.rotateCube(destinationMapper[this.props.sideIdx][destinationName])}/>
    })

    return (
      <div className={cssClasses}>
        <div className="face">
          {cubeMovers}
          <h1>{this.props.faceData.title}</h1>
          <span>{this.props.shortDescription}</span>
          <p>{this.props.longDescription}</p>
        </div>
      </div>
    )
  }
}
