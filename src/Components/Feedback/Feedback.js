import React, { Component } from "react";
import { Controls } from './Controls/Controls';
import { Statistics } from './Statistics/Statistics';

class Feedback extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0
    }

    total = 0;

    countTotalFeedback = () => {
      Object.values(this.state).reduce(( acc, elem ) => {
        // this.total = acc + elem;
        return this.total = acc + elem;
      }, 1) 
    }

    countPositiveFeedbackPercentage = () => {
      if(this.state.good === 0 || this.total < 1){
        return
      }
      return Math.round(100 / (this.total / this.state.good))
    }

    onLeaveFeedback = (event) => {
        this.setState(prevState => {
            let name = event.target.name
            return { [name]: prevState[name] + 1 };
        })
        this.countTotalFeedback();
    }


    render() {
      return (
        <div>
          <h1>Hello</h1>
          <Controls options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}/>
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.total} positivePercentage={this.countPositiveFeedbackPercentage}/>
        </div>
      )
    }

  };

  export default Feedback;