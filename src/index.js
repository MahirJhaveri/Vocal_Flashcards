import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import './index.css';

import App from './Components/App.js';
import Whoops404 from './Components/Whoops404';

ReactDOM.render(
  <Router history={hashHistory}>
    <div>
      <Route path='/' component={App}/>
      <Route path='/home' component={App}/>
      <Route path='/quizesList' component={App}/>
      <Route path='*' component={Whoops404}/>
    </div>
  </Router>,
  document.getElementById('root')
);
