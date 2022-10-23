// import PropTypes from 'prop-types';

import React, { Component } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { Sections } from 'components/Sections/Sections';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';



export class Counter extends Component {
    state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
 
  onHandleFeedback = option => {
   
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 }
    })
  }
  
  
  onTotalFeedback = () => Object.values(this.state)
    .reduce((total, value) => {
    return total + value
  }, 0);

  onPositiveFeedback = () => {
    let positiveFeedback = 0;
    const { good } = this.state;
    const totalFeedback = this.onTotalFeedback();

    if (totalFeedback > 0) {
      positiveFeedback = Math.round((good * 100) / totalFeedback) ;
    }
    return `${positiveFeedback}%`;
  }

  render() {
    
    return (
    <div>       
        
      <Sections title={'Please leave feedback'} >

        <FeedbackOptions
            options={Object.keys(this.state)}             
            onHandleFeedback={this.onHandleFeedback}
        />
      </Sections> 
      <Sections title={'Statistics'}>
            {this.onTotalFeedback() ? (
        <Statistics
          Good={this.state.good}
          Neutral={this.state.neutral}
          Bad={this.state.bad}
          Total={this.onTotalFeedback()}
          positivePercentage={this.onPositiveFeedback()}  
        />            
            ) : (
             Notify.info('There is no feedback'))      
          }             
                 
      </Sections>
    </div>
    );
  }
}


