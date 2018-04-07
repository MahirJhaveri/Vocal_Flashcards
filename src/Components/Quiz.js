import React from 'react';
import QuizSidebar from './QuizSidebar.js';
import QuizQuestion from './QuizQuestion.js';

import '../Stylesheets/Quiz.css';

export default class Quiz extends React.Component{
  constructor(props){
    super(props);
    var quizzes = [
      {
        questions : ["What is Good Morning in French?", "What is Thank You in French?"],
        answers : ["bonjour", "merci"]
      }
    ];
    var id = props.params.id;
    console.log(id);
    this.state = {
      questions : quizzes[id].questions,
      answers : quizzes[id].answers,
      currentQuestion : 1
    }
  }

  changeQuestion(newQuestion){
    this.state.currentQuestion = newQuestion;
    this.setState(this.state);
  }

  getChangeQF(i){
    return this.changeQuestion.bind(this, i + 1);
  }

  render(){
    var state = this.state;
    var currentQuestion = state.currentQuestion;
    var questions = state.questions;
    var answers = state.answers;

    return(
      <div className='Quiz'>
        <QuizSidebar questions={questions} currentQuestion={currentQuestion} changeQuestion={this.getChangeQF.bind(this)} />
        <h1>{currentQuestion}</h1>
        <QuizQuestion question={questions[currentQuestion - 1]} answer={answers[currentQuestion - 1]} num={currentQuestion} />
      </div>
    );
  }
};
