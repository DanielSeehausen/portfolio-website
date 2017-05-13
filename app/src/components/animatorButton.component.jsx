import React, { Component } from 'react'
import { render } from 'react-dom'

export default class AnimatorButton extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <h3 className="animator-button" onClick={this.props.onClick} />
    )
  }
}
