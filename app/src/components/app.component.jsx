import React, { Component } from 'react'
import { render } from 'react-dom'
import Cube from './cube.component.jsx'
import Background from './background.component.jsx'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      activeFaceIdx: 0
    }
  }

  render() {
    return (
      <div>
        <Cube cubeName="cube" />
      </div>
    )
  }
}
