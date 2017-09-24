import React from 'react';
import ReactDOM from 'react-dom';
import Trianglify from 'trianglify';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const pattern = Trianglify({ width: window.innerWidth, height: window.innerHeight });
document.body.appendChild(pattern.canvas());

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
