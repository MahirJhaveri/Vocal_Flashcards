import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

import '../Stylesheets/Header.css';

export default class Header extends React.Component{
  render(){
    return(
      <div className='Header'>
        <h1 id="title">#title</h1>
        <div className='Navbar'>
          <Link to='/home'><button className='Link'>Home</button></Link>
          <Link to='/quizzesList'><button className='Link'>My Quizzes</button></Link>
        </div>
      </div>
    );
  }
}
