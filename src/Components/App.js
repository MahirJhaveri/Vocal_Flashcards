import React from 'react';
import ReactDOM from 'react-dom';

import Home from './Home.js';

export default class App extends React.Component{
  render(){
    var props = this.props;
    var collection = props.params.collection;

    return(
      <div className='App'>
        <div className='route_data'>
          {(props.location.pathname === '/') ? <Home /> :
          (props.location.pathname === '/home') ? <Home /> :
          <h1>Error - {props.location.pathname} </h1>}
        </div>
      </div>
    );
  }
};
