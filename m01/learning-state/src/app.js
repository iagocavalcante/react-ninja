'use strict'

import React, { Component } from 'react'
import Button from './button'
import Square from './square'
import Timer from './timer'

class App extends Component {
  constructor () {
    super()
    this.state = {
      time: 0,
      color: '#dedede',
      showTimer: false
    }
  }

  render () {
    return (
      <div className='container'>
        <Square color={this.state.color}/>

        {['blue', 'cyan', 'black'].map(color => (
          <Button
            key={color}
            handleClick={() => this.setState({ color })}>
            {color}
          </Button>
        ))}

        {this.state.showTimer && <Timer time={this.state.time}></Timer>}
        
        <button onClick={() => {
          this.setState({ showTimer: !this.state.showTimer, time: this.state.time++})
        }}>Show / Hide Timer</button>

        <Button handleClick={() => this.setState({ color: 'yellow' })}>
          Clique em mim
        </Button>
      </div>
    )
  }
}

export default App