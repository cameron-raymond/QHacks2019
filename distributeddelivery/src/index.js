import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Intro from './Scenes/Intro/Intro'
import UserFlow from './Userflow'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<UserFlow />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
