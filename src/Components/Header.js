import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

import '../Stylesheets/Header.css';

export default class Header extends React.Component{
  render(){
    return(
      <div className='Header'>
        <h1 id="title">Vocal Flashcards</h1>
        <div className='Navbar'>
          <Link to='/home'><button className='btn btn-primary btn-lg page-buttons'>Home</button></Link>
          <Link to='/quizesList'><button className='btn btn-primary btn-lg page-buttons'>My Quizzes</button></Link>
        </div>
      </div>
    );
  }
}
