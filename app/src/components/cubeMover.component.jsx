import React, { Component } from 'react'
import { render } from 'react-dom'

export default class CubeMover extends Component {
  constructor() {
    super()
    this.state = {
      active: true,
    }
  }

  render() {
    const cssClasses = `cubemover cube-mover-${this.props.direction}`
    return (
      <h1 className={cssClasses} onClick={this.props.onClick}>
        `${this.props.direction}`
      </h1>
    )
  }
}
