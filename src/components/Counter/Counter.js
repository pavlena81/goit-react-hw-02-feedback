import PropTypes from 'prop-types';

import React, { Component } from "react";

import { Title } from './Counter.styled';


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

  handleDecrement = evt => {
    this.setState(prevState => ({
      good: Math.max(prevState.good -1, 0)
    }));
    console.log("Decrement button was clicked!", evt); // работает
    console.log("this.props: ", this.props); // work
  }

  render() {
    const { step } = this.props;

    return (
      <div>
        <Title>Please leave feedback</Title>

        <span>Good{this.state.good}</span>
        <span>Neutral{this.state.neutral}</span>
        <span>Bad{this.state.bad}</span>

        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}


// Counter.PropTypes = {
//   step: PropTypes.number.isRequired,
// }

