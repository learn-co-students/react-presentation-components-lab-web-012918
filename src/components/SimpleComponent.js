// Code SimpleComponentHere Here
import React from 'react'
class SimpleCompnent extends React.Component {
  constructor(){
    super()
    this.state = {
      mood: 'happy'
    }
  }

  changeMood = () => {
    this.setState({
      mood: 'sad'
    })
  }

  render(){
    return(
      <div onClick={this.changeMood}>{this.state.mood}</div>
    )
  }
}

export default SimpleCompnent
