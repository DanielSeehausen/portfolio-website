import React, { Component } from 'react'
import { render } from 'react-dom'
import Side from './sides/side.component.jsx'
import { getFaceDataByFaceName, idxToFace } from "../helpers/dataMapper.js"
import { graphics } from "../helpers/graphics.js"

export default class Cube extends Component {
  constructor(props) {
    super(props)
    //TODO: going to need to decide how to handle active face
    this.rotate = this.rotate.bind(this)
    this.state = {
      pos: {
        xDeg: 0,
        yDeg: 0
      }
    }
  }

  componentDidMount() {
    this.domSelf = document.getElementById(this.props.cubeName)
  }

  rotate() {
    // stop oscillation FIRST!
    let direction = ["links", "rechts", "gegenUeber", "oben", "unten"][Math.floor(Math.random() * 5)]
    let newPos = graphics.rotateCube(this.domSelf, this.state.pos, direction)
    this.setState({
      pos: newPos
    })
  }

  render() {
    // temporary sides
    const sides = [...Array(6)].map((side, idx) => {
      let faceName = idxToFace[idx]
      let faceData = getFaceDataByFaceName(this.props.name, faceName)
      return <Side key={idx} id={idx} faceName={faceName} faceData={faceData} />
    })
    return (
      <div className="container">
        <div className="cube" id={this.props.cubeName} onClick={this.rotate}>
          {sides}
        </div>
      </div>
    )
  }
}
