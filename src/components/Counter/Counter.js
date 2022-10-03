import PropTypes from 'prop-types';

import React, { Component } from "react";

import { Title, ListCounter, ItemCounter, Btn, ListStatistics } from './Counter.styled';


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
  };
  
  static propTypes = {
    good: PropTypes.number.isRequired,
  }
  
    state = {
    good: this.props.initialGood,
    neutral: 0,
    bad: 0
  }

  handleIncrement = evt => {
    this.setState(prevState => ({
      good: Math.max(prevState.good +1, 0)
    }));
    console.log("Increment button was clicked!", evt); // работает
    console.log("this.props: ", this.props); // work
  };

  
  handleIncrementNeutral = evt => {
    this.setState(prevState => ({
      neutral: Math.max(prevState.neutral +1, 0)
    }));
    console.log("Decrement button was clicked!", evt); // работает
    console.log("this.props: ", this.props); // work
  }

  handleFeedBackBad = evt => {
    this.setState(prevState => ({
      bad: Math.max(prevState.bad +1, 0)
    }));
    console.log("Decrement button was clicked!", evt); // работает
    console.log("this.props: ", this.props); // work
  }
  render() {
    const { step } = this.props;

    return (
      <div>
        <Title>Please leave feedback</Title>
      <ListCounter>
        <ItemCounter>
        <Btn type="button" onClick={this.handleIncrement}>
          Good{step}
          </Btn>
          </ItemCounter>  
          <ItemCounter>
        <Btn type="button" onClick={this.handleIncrementNeutral}>
          Neutral{step}
            </Btn>
          </ItemCounter>
          <ItemCounter>
        <Btn type="button" onClick={this.handleFeedBackBad}>
          Bad    {step}
          </Btn>
        </ItemCounter>  
        </ListCounter>
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
            <span>Total:</span>
          </li>
          <li>
            <span>Positive feedback:</span>
          </li>
        </ListStatistics>
        
        
        
      </div>
    );
  }
}


// Counter.PropTypes = {
//   step: PropTypes.number.isRequired,
// }

