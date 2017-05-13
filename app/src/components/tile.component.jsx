import React, { Component } from 'react'
import { render } from 'react-dom'

export default class Tile extends Component {
  constructor() {
    super()
  }

  render() {
    const style = this.props.tileData.style
    return (
      <div id={`tile-${this.props.tileIdx}`} className="tile" style={style}>
        <h1>Imatile {`${this.props.tileIdx}`}</h1>
      </div>
    )
  }
}
