import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import closeIcon from '../assets/close.svg';

const styles = {
  container: {
    border: '1px solid #36558F',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '12px',
    padding: '5px 0 5px 10px',
    borderRadius: '3px',
    background: '#ECEFF4',
    color: '#23375C',
    position: 'relative',
    height: '30px',
    margin: '5px 0 0 5px',
    userSelect: 'none',
    cursor: 'default',
  },
  separator: {
    borderRight: '1px solid #36558F',
    right: '29px',
    height: '29px',
    position: 'absolute',
  },
  closeButton: {
    cursor: 'pointer',
    padding: '10px',
    width: '30px',
    height: '30px',
    marginLeft: '20px',
    ':hover': {
      opacity: '0.5',
      background: 'rgba(35, 55, 92, 0.3)',
    },
  },
};

const ActiveOption = ({ option, unselectOption, style }) => (
  <div style={[styles.container, style]}>
    <span>{option.label}</span>
    <span style={styles.separator} />
    <img src={closeIcon} style={styles.closeButton} onClick={unselectOption} alt="Unselect option" />
  </div>
);

ActiveOption.propTypes = {
  option: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  unselectOption: PropTypes.func.isRequired,
  style: PropTypes.shape(),
};

ActiveOption.defaultProps = {
  style: {},
};

export default Radium(ActiveOption);
