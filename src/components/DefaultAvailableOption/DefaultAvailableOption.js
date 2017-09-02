import React from 'react';
import Radium from 'radium';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  height: 30px;
  line-height: 30px;
  padding-left: 10px;
  font-size: 12px;
  text-align: left;
  :hover {
    background: #ECEFF4;
  }
  :not(:last-child) {
    border-bottom: 1px solid lightgray;
  }
`;

const DefaultAvailableOption = ({ option, selectOption }) => (
  <Container onClick={selectOption}>
    {option.label}
  </Container>
);

DefaultAvailableOption.propTypes = {
  option: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  selectOption: PropTypes.func.isRequired,
};

export default Radium(DefaultAvailableOption);
