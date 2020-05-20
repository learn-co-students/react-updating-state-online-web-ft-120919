import React from 'react'

export default class ClickityClick extends React.Component {
  constructor() {
    super()
    this.state = {
      toggle: false,
    }
  }

  handleClick = () => {
    this.setState(previousState => {
      return { toggle: !previousState.toggle }
    })
  }

  render() {
    return (
      <div>
        <p>This light is {this.state.toggle ? 'ON' : 'OFF'}</p>
        <button onClick={this.handleClick}>
          {this.state.toggle ? 'TURN OFF' : 'TURN ON'}
        </button>
      </div>
    )
  }
}