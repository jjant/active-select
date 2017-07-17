import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';

const style = {
  borderBottom: '1px solid lightgray',
  height: '30px',
  lineHeight: '30px',
  paddingLeft: '10px',
  fontSize: '12px',
  textAlign: 'left',
  ':hover': {
    background: '#ECEFF4',
  },
};

const DefaultAvailableOption = ({ option, selectOption }) => (
  <div style={style} onClick={selectOption}>
    {option.label}
  </div>
);

DefaultAvailableOption.propTypes = {
  option: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  selectOption: PropTypes.func.isRequired,
};

export default Radium(DefaultAvailableOption);
