import React from 'react';
import ReactDOM from 'react-dom';
import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

  function func() {
    return alert('hi')
  }

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={ func } />
  </div>,
  document.getElementById('root')
);
