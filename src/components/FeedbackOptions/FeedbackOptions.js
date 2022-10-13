import React from "react";
 
import PropTypes from 'prop-types';
import {  ListCounter, ItemCounter, Btn } from '../Counter/Counter.styled';

export const FeedbackOptions = ({ options, onHandleFeedback }) => {
  return (
    <ListCounter>
      {options.map(option => {
        return (
          <ItemCounter key={option}>
            <Btn
              type="button"
              name={option}
              onClick={() => onHandleFeedback(option)}>
            {option}
          </Btn>
        </ItemCounter>)
      }
      )}      
         
    </ListCounter>
  )
} 

FeedbackOptions.propTypes = {
   options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onHandleFeedback: PropTypes.func.isRequired,
};

