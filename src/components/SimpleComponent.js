// Code SimpleComponentHere Here
import React from 'react';

export default class SimpleComponent extends React.Component {

  state = {
    mood: 'happy'
  }

  // changeMood = (e) => {
  //   if (e.target.innerText === 'happy') {
  //     this.setState({ mood: 'sad'}) } else {
  //       this.setState({ mood: 'happy'})
  //     }
  // }

   setToSad = (e) => {
     this.setState({
       mood: 'sad'
     })
   }

  render() {
    return (
      <div onClick={ this.setToSad }>
        <p>{ this.state.mood }</p>
      </div>
    )
  }
}
