'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: 'Yuhu',
      checked: false,
      valueSelect: '3',
      valueTextarea: 'Faskjdflçjasdçf'
    }
  }
  render () {
    return (
      <div className='container'>
        <form onSubmit={(e) => {
          e.preventDefault()
          console.log('e => ', e)
        }}
        
        onChange={(e) => {
          console.log('e => ', e)
        }}>
          <input type='text' value={this.state.value} onChange={(e) => {
            this.setState({
              value: e.target.value
            })
          }}/>

          <label>Checkbox</label>
          <input type='checkbox' checked={this.state.checked} onChange={(e) => {
            this.setState({
              checked: e.target.checked
            })
          }}/>
          
          <label>Radio</label>
          <input type='radio' checked={this.state.checked} onChange={(e) => {
            this.setState({
              checked: e.target.checked
            })
          }}/>
          <input type='radio' checked={this.state.checked} onChange={(e) => {
            this.setState({
              checked: e.target.checked
            })
          }}/>

          <label>Select</label>
          <select value={this.state.valueSelect} onChange={(e) => {
            this.setState({
              valueSelect: e.target.value
            })
          }}>
            <option value='1'>Opcao 1</option>
            <option value='2'>Opcao 2</option>
            <option value='3'>Opcao 3</option>
          </select>
          
          <label>Select</label>
          <select multiple value={['1', '2']} onChange={(e) => {
            this.setState({
              valueSelect: e.target.value
            })
          }}>
            <option value='1'>Opcao 1</option>
            <option value='2'>Opcao 2</option>
            <option value='3'>Opcao 3</option>
          </select>
          
          <label>TextArea</label>
          <textarea defaultValue='Eita' value={this.state.valueTextarea} onChange={(e) => {
            this.setState({
              valueTextarea: e.target.value
            })
          }}></textarea>
        </form>
      </div>
    )
  }
}

export default App