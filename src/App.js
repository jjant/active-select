import React, { Component } from 'react';
import './App.css';
import ActiveSelect from './select/ActiveSelect';

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

class MyCitySelect extends Component {
  state = {}
  onChange = selectState => this.setState(selectState)

  render() {
    return (
      <ActiveSelect
        onChange={this.onChange}
        availableOptions={availableOptions}
        focused={this.state.focused}
        selectedOptions={this.state.selectedOptions}
      />
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App" style={{ padding: '20px' }}>
        <MyCitySelect />
      </div>
    );
  }
}

export default App;
