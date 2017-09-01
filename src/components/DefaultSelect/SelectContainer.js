import React from 'react';
import styled from 'styled-components';

const SelectedOptionContainer = styled.div`
  border: 1px solid;
  border-color: ${({ focused }) => focused ? '#36558F' : 'lightgray'};
  width: 400px;
  margin: 0 auto;
  padding: 0 30px 5px 0;
  display: flex;
  border-radius: ${({ focused }) => focused ? '3px 3px 0 0' : '3px'};
  flex-wrap: wrap;
  box-sizing: border-box;
  min-height: 42px;
  position: relative;
`;

export default SelectedOptionContainer;
