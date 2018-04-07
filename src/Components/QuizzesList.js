import React from 'react';

import '../Stylesheets/Quizzes.css';

export default class QuizzesList extends React.Component{
  render(){
    return(
      <div className="quizzes-content">
        <h1>Here is a List of Your Quizzes</h1>
        <div className="col">
          <div className="row-sm-3">
            <button className="btn btn-lg btn-primary language-buttons">Japanese Quiz</button>
          </div>
          <div className="row-sm-3">
            <button className="btn btn-lg btn-primary language-buttons">Arabic Quiz</button>
          </div>
          <div className="row-sm-3">
            <button className="btn btn-lg btn-primary language-buttons">Hindi Quiz</button>
          </div>
          <div className="row-sm-3">
            <button className="btn btn-lg btn-primary language-buttons">English Quiz</button>
          </div>
        </div>
      </div>
    );
  }
}
