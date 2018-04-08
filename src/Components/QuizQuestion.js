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
<<<<<<< HEAD
      <div className="QuestionContainer">
        <div className="Q">
          <h1>Question:</h1>
          <h2>{this.props.question}</h2>
        </div>
        <div className="A">
          <h1>Answer : {this.props.answer}</h1>
        </div>
        <div></div>
        <div className="question-container">
          <div className="col">
            <div className="row-sm-8">
              <div className="Q">
                <h1>Question: {this.state.num}</h1>
                <h2>{this.state.question}</h2>
              </div>
=======
      <div className="question-container">
        <div className="col">
          <div className="row-sm-8">
            <div className="Q">
              <h1>Question: {this.state.num}</h1>
              <h2>{this.state.question}</h2>
>>>>>>> a2813dcbe8ebf99c483215c4bb4cea6a57bb2943
            </div>
            <div className="row-sm-4">
              <div className="A">
                <h3>Your Answer: [user answer here]</h3>
                <h3>Correct Answer : <span id ="answer">{this.state.answer}</span></h3>
              </div>
            </div>
          </div>

        </div>
        </div>
<<<<<<< HEAD
=======
      </div>
>>>>>>> a2813dcbe8ebf99c483215c4bb4cea6a57bb2943
    );
  }
};
