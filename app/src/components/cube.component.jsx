import React, { Component } from 'react'
import { render } from 'react-dom'
import Side from './sides/side.component.jsx'
import { getFaceDataByFaceName, idxToFace } from "../helpers/dataMapper.js"
import { graphics } from "../helpers/graphics.js"
import cubeConfig from "../config/cubeConfig.js"

export default class Cube extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeFaceName: "front",
      pos: {
        x: 0,
        y: 0,
        z: 0
      },
      locked: false,
    }
    this.rotateCube = this.rotateCube.bind(this)
    this.lock = this.lock.bind(this)
    this.unlock = this.unlock.bind(this)
  }

  lock() {
    this.setState({ locked: true })
  }

  unlock() {
    this.setState({ locked: false })
  }

  componentDidMount() {
    this.domSelf = document.getElementById(this.props.cubeName)
  }

  rotateCube(direction) {
    if (this.state.locked) return // if we are in an animation, return
    this.lock()
    let newState = graphics.rotateCube(this.domSelf, this.state, direction, cubeConfig.rotationDuration)
    this.setState( newState )
    // having trouble getting a callback on an event listener for animation end so using set timeout
    setTimeout(() => this.unlock(), cubeConfig.rotationDuration)
  }

  render() {
    // temporary sides
    const sides = [...Array(6)].map((_, idx) => {
      let faceName = idxToFace[idx]
      let faceData = getFaceDataByFaceName(this.props.name, faceName)
      return <Side key={idx} sideId={idx} faceName={faceName} faceData={faceData} rotateCube={this.rotateCube} />
    })
    return (
      <div className="container">
        <div className="cube" id={this.props.cubeName} >
          {sides}
        </div>
      </div>
    )
  }
}
