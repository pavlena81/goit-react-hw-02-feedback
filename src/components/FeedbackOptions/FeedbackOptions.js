import React from "react";
 

import {  ListCounter, ItemCounter, Btn } from '../Counter/Counter.styled';

export const FeedbackOptions = ({onGood, onNeutral, onBad}) => (
      <ListCounter>
        <ItemCounter>
        <Btn type="button" onClick={onGood}>
          Good
          </Btn>
          </ItemCounter>  
          <ItemCounter>
        <Btn type="button" onClick={onNeutral}>
          Neutral
            </Btn>
          </ItemCounter>
          <ItemCounter>
        <Btn type="button" onClick={onBad}>
          Bad    
          </Btn>
        </ItemCounter>  
        </ListCounter>
)