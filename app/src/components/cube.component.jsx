import React, { Component } from 'react'
import { render } from 'react-dom'
import Side from './sides/side.component.jsx'
import { getFaceDataByFaceName, idxToFace } from "../helpers/dataMapper.js"
import { setCube, rotateCube } from "../helpers/cubeAnimator.js"

export default class Cube extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeFaceIdx: 0,
      locked: false,
    }
    this.rotateCube = this.rotateCube.bind(this)
    this.lock = this.lock.bind(this)
    this.unlock = this.unlock.bind(this)
    this.$self = null
    this.domSelf = null
  }

  lock() {
    console.log('locking')
    this.setState({ locked: true })
  }

  unlock() {
    console.log('unlocking')
    this.setState({ locked: false })
  }

  //todo: would be better to associate the controller with the object than pass all the references
  componentDidMount() {
    this.$self = $(`#${this.props.cubeName}`)
    this.domSelf = document.getElementById(this.props.cubeName)
    setCube(this.$self, this.domSelf)
  }

  rotateCube(destinationIdx) {
    console.log('s')
    if (this.state.locked) return // if we are in an animation don't start another
    console.log(`rotating: ${this.state.activeFaceIdx} -> ${destinationIdx}`)
    rotateCube(this.state.activeFaceIdx, destinationIdx, this.lock, this.unlock)
    this.setState({ activeFaceIdx: destinationIdx })
  }

  render() {
    // temporary sides
    const sides = [...Array(6)].map((_, idx) => {
      let faceName = idxToFace[idx]
      let faceData = getFaceDataByFaceName(this.props.name, faceName)
      return <Side key={idx} sideIdx={idx} faceName={faceName} faceData={faceData} rotateCube={this.rotateCube} />
    })
    return (
      <div className="cube-container">
        <div className="oscillation-wrapper oscillate">
          <div className="cube" id={this.props.cubeName} >
            {sides}
          </div>
        </div>
      </div>
    )
  }
}
