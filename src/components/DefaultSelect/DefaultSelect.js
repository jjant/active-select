import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SelectedOptionContainer from './SelectContainer';
import AvailableOptionsContainer from './AvailableOptionsContainer';
import ArrowButton from './ArrowButton'
import './DefaultSelect.css';

const styles = {
  container: {
    width: '400px',
  },
};

class DefaultSelect extends PureComponent {
  state = {
    active: false,
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }


  handleClick = () => this.props.setFocus(true);

  setWrapperRef = (node) => this.wrapperRef = node;

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target))
      this.props.setFocus(false);
  }

  render() {
    const Search = this.props.searchComponent;
    const {
      selectedOptions,
      availableOptions,
      focused,
      setFocus,
      toggleFocus,
    } = this.props;

    return (
      <div
        ref={this.setWrapperRef}
        onFocus={this.handleClick}
        style={styles.container}
        className="default-select-container"
      >
        <SelectedOptionContainer focused={this.props.focused}>
          {selectedOptions}
          <Search />
          <ArrowButton focused={focused} onClick={toggleFocus} />
        </SelectedOptionContainer>
        {focused &&
          <AvailableOptionsContainer>
            {availableOptions}
          </AvailableOptionsContainer>}
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
  searchComponent: PropTypes.func.isRequired,
};

export default DefaultSelect;
