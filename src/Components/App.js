import React from 'react';
import ReactDOM from 'react-dom';

import Home from './Home.js';
import Header from './Header.js'
import QuizesList from './QuizesList';

export default class App extends React.Component{
  render(){
    var props = this.props;
    var collection = props.params.collection;

    return(
      <div className='App'>
        <Header />
        <div className='route_data'>
          {(props.location.pathname === '/') ? <Home /> :
          (props.location.pathname === '/home') ? <Home /> :
          (props.location.pathname === '/quizesList') ? <QuizesList /> :
          <h1>Error - {props.location.pathname} </h1>}
        </div>
      </div>
    );
  }
};
