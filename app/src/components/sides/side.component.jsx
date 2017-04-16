import React, { Component } from 'react'
import { render } from 'react-dom'
import ExpandedSide from './expanded-sides/expandedSide.component.jsx'

export default class Side extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const cssClasses = `side ${this.props.faceName}`
    return (
      <div className={cssClasses}>
        <div className="face">
          <h1>{this.props.faceData.title}</h1>
          <span>{this.props.shortDescription}</span>
          <p>{this.props.longDescription}</p>
        </div>
      </div>
    )
  }
}
