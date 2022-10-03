import PropTypes from 'prop-types';

import React, { Component } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { Sections } from 'components/Sections/Sections';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';



export class Counter extends Component {
  
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };
  
  static propTypes = {
    good: PropTypes.number.isRequired,
  }
  
    state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  }

  handleFeedbackGood = evt => {
    this.setState(prevState => ({
      good: Math.max(prevState.good +1, 0)
    }));
    
  };

  
  handleFeedbackNeutral = evt => {
    this.setState(prevState => ({
      neutral: Math.max(prevState.neutral +1, 0)
    }));
    
  }

  handleFeedbackBad = evt => {
    this.setState(prevState => ({
      bad: Math.max(prevState.bad +1, 0)
    }));  
    
  }


  onTotalFeedback = () => Object.values(this.state).reduce((total, value) => {
    return total + value
  }, 0);

  onPositiveFeedback = () => {
    let positiveFeedback = 0;
    const { good } = this.state;
    const totalFeedback = this.onTotalFeedback();

    if (totalFeedback ) {
       positiveFeedback = Math.round((good * 100) / totalFeedback) + '%';
    }
    return positiveFeedback;
  }

  render() {
    
    return (
      <div>       
        
      <Sections
          title={'Please leave feedback'}
        >

        <FeedbackOptions
          onGood={this.handleFeedbackGood}
          onNeutral={this.handleFeedbackNeutral}
          onBad={this.handleFeedbackBad}
        />
        
        <Sections
            title={'Statistics'}>
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
          
      </Sections>
      </div>
    );
  }
}


