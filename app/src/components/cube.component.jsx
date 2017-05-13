import React, { Component } from 'react'
import { render } from 'react-dom'
import Side from './sides/side.component.jsx'
import { getSideData, idxToSide } from "../helpers/sideDataMapper.js"
import { setCube, rotateCube, flattenCube, foldCube, locked } from "../helpers/cubeAnimator.js"

export default class Cube extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeSideIdx: 0,
      displayMode: 'folded',
    }
    this.cubeFolder = this.cubeFolder.bind(this)
    this.rotateCube = this.rotateCube.bind(this)
    this.$self = null
    this.domSelf = null
  }

  //todo: would be better to associate the controller with the object than pass all the references
  componentDidMount() {
    this.$self = $(`#${this.props.cubeName}`)
    this.domSelf = document.getElementById(this.props.cubeName)
    setCube(this.$self, this.domSelf)
  }

  rotateCube(destinationIdx) {
    console.log(`rotating: ${this.state.activeSideIdx} -> ${destinationIdx}`)
    rotateCube(this.state.activeSideIdx, destinationIdx)
    this.setState({ activeSideIdx: destinationIdx })
  }

  cubeFolder() {
    if (this.state.displayMode === 'folded' && !locked) {
      flattenCube()
      this.setState({ displayMode: 'flattened' })
    } else if (this.state.displayMode === 'flattened' && !locked) {
      foldCube()
      this.setState({ displayMode: 'folded' })
    }
  }

  render() {
    // temporary sides
    const sides = [...Array(6)].map((_, sideIdx) => {
      let sideData = getSideData(sideIdx)
      let active = this.state.activeSideIdx === sideIdx
      //TODO better way of assignment here
      if (sideData.animator === 'fold')
        return <Side key={idxToSide[sideIdx]} sideIdx={sideIdx} active={active} sideData={sideData} rotateCube={this.rotateCube} animator={this.cubeFolder}/>
      return <Side key={idxToSide[sideIdx]} sideIdx={sideIdx} active={active} sideData={sideData} rotateCube={this.rotateCube} />
    })

    return (
      <div className="cube-container">
        <div className="oscillation-wrapper oscillate">
          <div className="cube" id={this.props.cubeName}>
            {sides}
          </div>
        </div>
      </div>
    )
  }
}
