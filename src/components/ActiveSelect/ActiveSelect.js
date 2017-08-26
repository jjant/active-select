import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DefaultSelectedOption from '../DefaultSelectedOption/DefaultSelectedOption';
import DefaultAvailableOption from '../DefaultAvailableOption/DefaultAvailableOption';
import DefaultSelect from '../DefaultSelect/DefaultSelect';
import DefaultSearch from '../DefaultSearch/DefaultSearch';
import Layout from './Layout';

class ActiveSelect extends Component {
  setFocus = focused => this.props.onChange({ focused })

  setSearchParams = searchParams => this.props.onChange({ searchParams })

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
        searchText={this.props.searchText}
        selectedOptions={this.props.selectedOptions}
        availableOptions={this.props.availableOptions}
        searchComponent={this.props.searchComponent}
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
  searchText: PropTypes.string,
  focused: PropTypes.bool,
  selectComponent: PropTypes.func,
  availableOptionComponent: PropTypes.func,
  selectedOptionComponent: PropTypes.func,
  searchComponent: PropTypes.func,
};

ActiveSelect.defaultProps = {
  selectedOptions: [],
  searchText: '',
  focused: false,
  selectComponent: DefaultSelect,
  availableOptionComponent: DefaultAvailableOption,
  selectedOptionComponent: DefaultSelectedOption,
  searchComponent: DefaultSearch,
};

export default ActiveSelect;
