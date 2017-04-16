import React, { Component } from 'react'
import { render } from 'react-dom'

export default class ExpandedSide extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>I am an expanded side belonging to: {this.props.id}</h2>
      </div>
    )
  }
}
