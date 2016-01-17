import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

require('file?name=index.html!./index.html');
require('./main.scss');

ReactDOM.render(<App />, document.getElementById('container'));
