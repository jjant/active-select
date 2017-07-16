import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActiveOption from './ActiveOption';
import AvailableOption from './AvailableOption';
import DefaultSelect from './DefaultSelect';
import Layout from './Layout';

class ActiveSelect extends Component {
  setFocus = focused => this.props.onChange({ focused })

  toggleFocus = (event) => {
    event.stopPropagation();
    this.props.onChange({ focused: !this.props.focused });
  }

  selectOption = (option) => {
    this.props.onChange({ selectedOptions: [...this.props.selectedOptions, option] });
  }

  unselectOption = (option) => {
    this.props.onChange({
      selectedOptions: this.props.selectedOptions.filter(selectedOption => (
        selectedOption !== option
      )),
    });
  }

  render() {
    return (
      <Layout
        toggleFocus={this.toggleFocus}
        setFocus={this.setFocus}
        selectOption={this.selectOption}
        unselectOption={this.unselectOption}
        focused={this.props.focused}
        selectedOptions={this.props.selectedOptions}
        availableOptions={this.props.availableOptions}
        selectComponent={this.props.selectComponent}
        selectedOptionComponent={this.props.selectedOptionComponent}
        availableOptionComponent={this.props.availableOptionComponent}
      />
    );
  }
}

ActiveSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  availableOptions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  selectedOptions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  focused: PropTypes.bool,
  selectComponent: PropTypes.func,
  availableOptionComponent: PropTypes.func,
  selectedOptionComponent: PropTypes.func,
};

ActiveSelect.defaultProps = {
  selectedOptions: [],
  focused: false,
  selectComponent: DefaultSelect,
  availableOptionComponent: AvailableOption,
  selectedOptionComponent: ActiveOption,
};

export default ActiveSelect;
