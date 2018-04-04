// Code SimplerComponentHere Here
import React from 'react'

const SimplerComponent = (props) => {

  // let handleClick = (e) => {
  //   e.target.innerText === "I am just happy" ? e.target.innerText = "Now Im Sad" : e.target.innerText = "I am just happy"
  // }

    return <div onClick={props.handleClick}>I am just happy</div>

}

export default SimplerComponent
