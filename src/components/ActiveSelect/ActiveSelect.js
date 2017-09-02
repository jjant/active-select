import React, { Component } from 'react';
import activeSelectProps from './props';
import buildHelpers from './helpers';
import Layout from './Layout';

class ActiveSelect extends Component {
  static propTypes = activeSelectProps.propTypes
  static defaultProps = activeSelectProps.defaultProps

  helpers = buildHelpers(this)

  render() {
    return (
      <Layout
        focused={this.props.focused}
        toggleFocus={this.helpers.getToggleFocus()}
        setFocus={this.helpers.getSetFocus()}
        selectOption={this.helpers.getSelectOption()}
        unselectOption={this.helpers.getUnselectOption()}
        setSearchParams={this.helpers.getSetSearchParams()}
        availableOptions={this.helpers.getAvailableOptions()}
        searchComponent={this.helpers.getSearchComponent()}
        selectedOptionComponent={this.helpers.getSelectedOptionComponent()}
        searchParams={this.props.searchParams}
        selectedOptions={this.props.selectedOptions}
        selectComponent={this.props.selectComponent}
        noOptionsRemainingPlaceholder={this.props.noOptionsRemainingPlaceholder}
        availableOptionComponent={this.props.availableOptionComponent}
      />
    );
  }
}

export default ActiveSelect;
