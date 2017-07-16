# ActiveSelect

#### Minimal example

```javascript
import React from 'react';
import ActiveSelect from 'active-select';

const options = [
  { label: 'Miami', value: '1' },
  { label: 'New York', value: '2' },
  { label: 'Sidney', value: '3' },
];

class App extends React.Component {
  state = {
    selectedOptions
  }

  onChange = ({ option }) => {
    this.setState({ selectedOptions: [...selectedOptions, option] });
  }

  render() {
    <ActiveSelect
      options={options}
      selectedOptions={this.state.selectedOptions}
      onChange={this.onChange}
    />
  }
}
```

#### Advanced example

ActiveSelect's extensive API allows you to customize every part of the component, this includes the container component, the select component, the selected option component and the available option component.

The following example shows how easy it is to customize each component.

```javascript
import React from 'react';
import ActiveSelect from 'active-select';

const options = [
  { label: 'Miami', value: '1' },
  { label: 'New York', value: '2' },
  { label: 'Sidney', value: '3' },
];

const CustomSelect = ({ active, availableOptions, selectedOptions, toggleActive }) => (
  <div onClick={toggleActive}>
    <div>{selectedOptions}</div>
    {active &&
      <div style={{ border: '2px solid red' }}>
        {availableOptions}
      </div>}
  </div>
);

const CustomSelectedOption = ({ option, removeOption }) => (
  <div>
    <span>{option.label}</span>
    <span onClick={removeOption}>Remove</span>
  </div>
);

const CustomAvailableOption = ({ option, addOption }) => (
  <div onClick={addOption}>{option.label}</div>
);

class App extends React.Component {
  state = {
    focused: false,
    selectedOptions = [],
  }

  onSelectedOption = ({ option }) => {
    this.setState({ selectedOptions: [...selectedOptions, option] });
  }

  onUnselectedOption = ({ option }) => {
    this.setState({
      selectedOptions: selectedOptions.filter(selectedOption => selectedOption !== option)
    });
  }

  onFocusChange = ({ focus }) => this.setState({ focus })

  render() {
    <ActiveSelect
      focused={this.state.focused}
      options={this.state.options}
      onFocusChange={this.onFocusChange}
      selectedOptions={this.state.selectedOptions}
      onSelectedOption={this.onSelectedOption}
      onUnselectedOption={this.onUnselectedOption}
      selectComponent={CustomSelect}
      availableOptionComponent={CustomAvailableOption}
      selectedOptionComponent={CustomSelectedOption}
    />
  }
}
```
