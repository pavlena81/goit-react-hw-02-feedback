import React from "react";

import { ListStatistics } from "components/Counter/Counter.styled";

export const Statistics = ({Good, Neutral, Bad, Total, positivePercentage }) => (
        <ListStatistics>

          <li>
            <span>Good:{Good}</span>
          </li>
          <li>
            <span>Neutral:{Neutral}</span>
          </li>
          <li>
            <span>Bad:{Bad}</span>
          </li>
          <li>
            <span>Total:{Total}</span>
          </li>
          <li>
            <span>Positive feedback: {positivePercentage}</span>
          </li>
        </ListStatistics>
)