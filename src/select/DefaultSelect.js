import React, { Component } from 'react';
import PropTypes from 'prop-types';
import downArrowIcon from '../assets/down_arrow.svg';

const styles = {
  container: {
    width: '400px',
  },
  selectedOptionContainer: focused => ({
    border: '1px solid',
    borderColor: focused ? '#36558F' : 'lightgray',
    width: '400px',
    margin: '0 auto',
    padding: '0 30px 5px 0',
    display: 'flex',
    borderRadius: focused ? '3px 3px 0 0' : '3px',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
    minHeight: '42px',
    position: 'relative',
  }),
  availableOptionsContainer: {
    border: '1px solid #36558F',
    borderTop: '0',
    borderRadius: '0 0 3px 3px',
    maxHeight: '200px',
    overflowY: 'auto',
  },
  arrowIcon: focused => ({
    width: '30px',
    height: '100%',
    padding: '10px',
    right: '0',
    position: 'absolute',
    cursor: 'pointer',
    top: '50%',
    transform: `translateY(-50%) ${focused ? 'rotate(180deg)' : ''}`,
    userSelect: 'none',
  }),
};

class DefaultSelect extends Component {
  componentWillMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnMount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    this.wrapperRef &&
    !this.wrapperRef.contains(event.target) &&
    this.props.setFocus(false);
  }

  render() {
    const {
      selectedOptions,
      availableOptions,
      focused,
      setFocus,
      toggleFocus,
    } = this.props;

    return (
      <div
        onClick={() => setFocus(true)}
        ref={ref => (this.wrapperRef = ref)}
        style={styles.container}
      >
        <div style={styles.selectedOptionContainer(focused)}>
          {selectedOptions}
          <img
            style={styles.arrowIcon(focused)}
            onClick={toggleFocus}
            src={downArrowIcon}
            alt="Down arrow"
          />
        </div>
        {focused &&
          <div style={styles.availableOptionsContainer}>
            {availableOptions}
          </div>}
      </div>
    );
  }
}

DefaultSelect.propTypes = {
  focused: PropTypes.bool.isRequired,
  setFocus: PropTypes.func.isRequired,
  toggleFocus: PropTypes.func.isRequired,
  selectedOptions: PropTypes.arrayOf(PropTypes.element).isRequired,
  availableOptions: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default DefaultSelect;
