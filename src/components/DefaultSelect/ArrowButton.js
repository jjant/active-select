import React from 'react';
import styled from 'styled-components';
import downArrowIcon from './assets/down_arrow.svg';

const getTransform = ({ focused }) => `translateY(-50%) ${focused ? 'rotate(180deg)' : ''}`;

const StyledImage = styled.img`
  width: 30px;
  height: 100%;
  padding: 10px;
  right: 0;
  position: absolute;
  cursor: pointer;
  top: 50%;
  transform: ${getTransform};
  user-select: none;
`;

const ArrowButton = ({ focused, onClick }) => (
  <StyledImage
    src={downArrowIcon}
    alt="Down arrow"
    onClick={onClick}
    focused={focused}
  />
);

export default ArrowButton;
