import React, {Component} from 'react';

export default class Lightswitch extends Component {
  constructor(props) {
    super();
    this.state = {toggled: props.toggled}
  }

  handleClick = () => {
    this.setState(oldState => {
      return {toggled: !oldState.toggled};
    })
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.toggled ? "ON" : "OFF"}</button>
    )
  }
}
Lightswitch.defaultProps = {toggled: false};