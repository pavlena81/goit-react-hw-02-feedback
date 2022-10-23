import React from "react";
import PropTypes from 'prop-types';

import { ListStatistics } from './Statistics.styled';

export const Statistics = ({ Good, Neutral, Bad, Total, positivePercentage }) => {
  return (
    <ListStatistics>

      <li>
        Good:<span>{Good}</span>
      </li>
      <li>
        Neutral:<span>{Neutral}</span>
      </li>
      <li>
        Bad:<span>{Bad}</span>
      </li>
      <li>
        Total:<span>{Total}</span>
      </li>
      <li>
        Positive feedback: <span>{positivePercentage}</span>
      </li>
    </ListStatistics>
  )
}


Statistics.propTypes = {
  Good: PropTypes.number.isRequired,
  Neutral: PropTypes.number.isRequired,
  Bad: PropTypes.number.isRequired,
  Total: PropTypes.number.isRequired,
  PositivePercentage: PropTypes.string.isRequired,
};