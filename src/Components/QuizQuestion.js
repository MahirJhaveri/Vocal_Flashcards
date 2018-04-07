import React from 'react';

export default class QuizQuestion extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      question: props.question,
      answer: props.answer,
      num: props.num
    }
  }

  render(){
    var state = this.state;
    var question = state.question;
    var answer = state.answer;
    var num = state.num;

    return(
      <div className="QuestionContainer">
        <div className="Q">
          <h1>Question:</h1>
          <h2>{this.state.question}</h2>
        </div>
        <div className="A">
          <h1>Answer : {this.state.answer}</h1>
        </div>
        <div></div>
      </div>
    );
  }
};
