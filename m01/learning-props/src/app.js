'use strict'

import React, { Component } from 'react'
import Square from './square'
import Title from './title'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <Title name='Iago' lastname='Cavalcante' />
        {['blue', 'red', 'blue'].map((square, index) => (
          <Square key={index} color={square} />
        ))}
      </div>
    )
  }
}

export default App