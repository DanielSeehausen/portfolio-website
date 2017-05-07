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
  }

  lock() {
    this.setState({ locked: true })
  }

  unlock() {
    this.setState({ locked: false })
  }

  componentWillMount() {
  }

  componentDidMount() {3
    this.$self = $(`#${this.props.cubeName}`)
    setCube(this.$self)
  }

  rotateCube(destinationIdx) {
    if (this.state.locked) return // if we are in an animation don't start another
    this.lock()
    console.log(`rotating: ${this.state.activeFaceIdx} -> ${destinationIdx}`)
    rotateCube(this.state.activeFaceIdx, destinationIdx)
    this.setState({ activeFaceIdx: destinationIdx })
    this.unlock()
  }

  render() {
    // temporary sides
    const sides = [...Array(6)].map((_, idx) => {
      let faceName = idxToFace[idx]
      let faceData = getFaceDataByFaceName(this.props.name, faceName)
      return <Side key={idx} sideIdx={idx} faceName={faceName} faceData={faceData} rotateCube={this.rotateCube} />
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
