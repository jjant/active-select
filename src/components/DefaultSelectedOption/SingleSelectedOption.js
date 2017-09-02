import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin: 5px 0 0 5px;
`;

const OptionSpan = styled.span`
  font-size: 14px;
`;

const UnselectButton = styled.span`
  position: absolute;
  right: 35px;
  user-select: none;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
  height: 13px;
  line-height: 10px;
  opacity: 0.5;
  :hover {
    opacity: 1;
  }
`;

const SingleSelectedOption = ({ option, unselectOption }) => (
  <Container>
    <OptionSpan>{option.label}</OptionSpan>
    <UnselectButton onClick={unselectOption} alt="Unselect option">×</UnselectButton>
  </Container>
);

SingleSelectedOption.propTypes = {
  option: PropTypes.shape({}).isRequired,
  unselectOption: PropTypes.func.isRequired,
};

export default SingleSelectedOption;
