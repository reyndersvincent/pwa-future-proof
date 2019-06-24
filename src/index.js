import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import register from './register';

const swURL = './serviceworker.js';

ReactDOM.render(<App />, document.getElementById('root'));

register(swURL);

