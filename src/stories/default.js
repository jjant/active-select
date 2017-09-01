import React, { Component } from 'react';
import ActiveSelect from '../components/ActiveSelect/ActiveSelect';

const availableOptions = [
  { value: '1', label: 'Miami' },
  { value: '2', label: 'New York' },
  { value: '3', label: 'Seattle' },
  { value: '4', label: 'Sidney' },
  { value: '5', label: 'Buenos Aires' },
  { value: '6', label: 'London' },
  { value: '7', label: 'Paris' },
  { value: '8', label: 'Barcelona' },
  { value: '9', label: 'Prague' },
];

export { availableOptions };

class MyCitySelect extends Component {
  state = {}
  onChange = selectState => this.setState(selectState)

  render() {
    return (
      <ActiveSelect
        onChange={this.onChange}
        availableOptions={this.props.availableOptions}
        focused={this.state.focused}
        selectedOptions={this.state.selectedOptions}
        searchParams={this.state.searchParams}
        searchable={this.props.searchable}
      />
    );
  }
}

export default MyCitySelect;
