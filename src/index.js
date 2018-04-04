import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

let counter = 0

const beHappy = (e) => {
  let colors = ['orange', 'yellow', 'red', 'green', 'blue', 'magenta']

  document.body.style.background = colors[counter]
  counter++;
  (counter === colors.length) ? counter = 0 : null
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={beHappy} />
  </div>,
  document.getElementById('root')
);
