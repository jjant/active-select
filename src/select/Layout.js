import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { difference } from 'lodash';

class Layout extends Component {
  renderAvailableOptions = () => {
    const AvailableOption = this.props.availableOptionComponent;
    const options = difference(this.props.availableOptions, this.props.selectedOptions);
    return options.map(option => (
      <AvailableOption
        option={option}
        selectOption={() => this.props.selectOption(option)}
        key={option.value}
      />
    ));
  }

  renderSelectedOptions = () => {
    const SelectedOption = this.props.selectedOptionComponent;
    return this.props.selectedOptions.map(option => (
      <SelectedOption
        option={option}
        unselectOption={() => this.props.unselectOption(option)}
        key={option.value}
      />
    ));
  };

  render() {
    const Select = this.props.selectComponent;
    return (
      <Select
        focused={this.props.focused}
        setFocus={this.props.setFocus}
        toggleFocus={this.props.toggleFocus}
        selectedOptions={this.renderSelectedOptions()}
        availableOptions={this.renderAvailableOptions()}
      />
    );
  }
}

Layout.propTypes = {
  availableOptions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  selectedOptions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  focused: PropTypes.bool.isRequired,
  selectComponent: PropTypes.func.isRequired,
  availableOptionComponent: PropTypes.func.isRequired,
  selectedOptionComponent: PropTypes.func.isRequired,
  selectOption: PropTypes.func.isRequired,
  unselectOption: PropTypes.func.isRequired,
  toggleFocus: PropTypes.func.isRequired,
  setFocus: PropTypes.func.isRequired,
};

export default Layout;
