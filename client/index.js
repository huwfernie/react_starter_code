/*
  ./client/index.js
  The webpack entry file
*/

console.log('Hello Huw');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(<App />, document.getElementById('root'));
