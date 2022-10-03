import React from "react";

import { Title } from '../Counter/Counter.styled';

export const Sections = ({ title, children }) => (
    <>
        <Title>{title}</Title>
            {children}
    </>    
)