import React, { Component } from 'react'
import { render } from 'react-dom'
import CubeMover from '../cubeMover.component.jsx'
import AnimatorButton from '../animatorButton.component.jsx'
import destinationMapper from '../../helpers/destinationMapper.js'
import { idxToSide } from '../../helpers/sideDataMapper.js'

export default class Side extends Component {
  constructor() {
    super()
  }

  render() {
    if (this.props.active) {
      var cubeMovers = ["rechts", "links", "unten", "oben", "gegenUeber1", "gegenUeber2", "gegenUeber3", "gegenUeber4"].map((destinationName, idx) => {
        return <CubeMover key={idx} destinationName={destinationName} onClick={() => this.props.rotateCube(destinationMapper[this.props.sideIdx][destinationName])}/>
      })
      var animator = (this.props.animator) ? <AnimatorButton onClick={this.props.animator}/> : null
    }
    const sideName = idxToSide[this.props.sideIdx]
    const {faceCSS, sideCSS} = this.props.sideData.style
    return (
      <div id={`${sideName}-side`} className="side" style={sideCSS}>
        <div id={`${sideName}-face`} className="face" style={faceCSS}>
          {animator}
          {cubeMovers}
        </div>
      </div>
    )
  }
}
