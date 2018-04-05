// Code SimpleComponentHere Here
import React from 'react'

export default class SimpleComponent extends React.Component {

  state = {
    mood: 'happy'
  }

  handleClick = () => {
    let setMood = this.state.mood === 'happy' ? 'sad' : 'happy'
    this.setState({
      mood: setMood
    })
  }

  render() {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}
