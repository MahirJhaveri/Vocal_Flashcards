import React from 'react';

export default class QuizSidebar extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      questions : props.questions,
      currentQuestion : props.currentQuestion,
      changeQuestion : props.changeQuestion
    };
    this.displayQuizes.bind(this);
  }

  displayQuizes(){
    var q = [];
    var state = this.state;
    for(var i = 0; i < state.questions.length; i++){
      q.push(
        <button onClick={state.changeQuestion(i)}>Quiz {i}</button>
      );
    }
    return <div>{q}</div>
          }

  render(){
    return(
      <div className="sidebar">
        {this.displayQuizes()}
      </div>
    );
  }
};
