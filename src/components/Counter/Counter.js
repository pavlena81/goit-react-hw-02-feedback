import PropTypes from 'prop-types';

import React, { Component } from "react";

import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Title, ListStatistics } from './Counter.styled';


export class Counter extends Component {
  /* ... */
  // constructor() {
  //   super();

  //   this.state = {
  //     value: 2,
  //   };
  // }

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
    // const { good, neutral, bad } = this.props;

    return (
      <div>
        
        <Title>Please leave feedback</Title>
      

        <FeedbackOptions
          onGood={this.handleFeedbackGood}
          onNeutral={this.handleFeedbackNeutral}
          onBad={this.handleFeedbackBad}
        />

        <ListStatistics>
          <h3>
            Statistics
          </h3>
          <li>
            <span>Good:{this.state.good}</span>
          </li>
          <li>
            <span>Neutral:{this.state.neutral}</span>
          </li>
          <li>
            <span>Bad:{this.state.bad}</span>
          </li>
          <li>
            <span>Total:{this.onTotalFeedback()}</span>
          </li>
          <li>
            <span>Positive feedback: {this.onPositiveFeedback()}</span>
          </li>
        </ListStatistics>
        
        
        
      </div>
    );
  }
}


// Counter.PropTypes = {
//   step: PropTypes.number.isRequired,
// }

