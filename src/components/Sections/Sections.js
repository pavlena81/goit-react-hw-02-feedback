import React from "react";
import PropTypes from 'prop-types';

import { Title } from '../Counter/Counter.styled';

export const Sections = ({ title, children }) => (
    <>
            {title && <Title>{title}</Title>}
            {children}
    </>    
)


Sections.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    
}