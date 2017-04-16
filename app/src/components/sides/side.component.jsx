import React, { Component } from 'react'
import { render } from 'react-dom'
import ExpandedSide from './expanded-sides/expandedSide.component.jsx'
import CubeMover from '../cubeMover.component.jsx'

export default class Side extends Component {
  constructor() {
    super()
  }

  render() {
    const cssClasses = `side ${this.props.faceName}`

    const cubeMovers = ["oben", "unten", "links", "rechts", "gegenUeber"].map((direction, idx) => {
        return <CubeMover key={idx} direction={direction} onClick={() => this.props.rotateCube(direction)}/>
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
