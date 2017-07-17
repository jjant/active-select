# ActiveSelect

## Live demo
Feel free to play around with ActiveSelect here: https://jjant.github.io/active-select

## Installation
Using [yarn](https://yarnpkg.com/lang/en/):

    $ yarn add active-select

Using [npm](https://www.npmjs.com/):

    $ npm install --save active-select

Then, inside any component use:
```javascript
// Using WebPack
import ActiveSelect from 'active-select';

// Using CommonJS modules
var ActiveSelect = require('active-select');
```

## Usage
### Minimal example
```javascript
import React, { Component } from 'react';
import ActiveSelect from 'active-select';

const availableOptions = [
  { value: '1', label: 'Miami' },
  { value: '2', label: 'New York' },
  { value: '3', label: 'Seattle' },
  { value: '4', label: 'Sidney' },
  { value: '5', label: 'Buenos Aires' },
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
```

## API
### Props
ActiveSelect expects the following props to be passed:
* `availableOptions`: (**PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })).isRequired**) an array of the options to be rendered.
* `focused`: (**PropTypes.bool.isRequired**) value indicating if the component is currently focused.
* `selectedOptions`: (**PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })).isRequired**) an array containing the currently selected options.
* `onChange`: (**PropTypes.func.isRequired**) function responsible for properly updating the state for the component to work. You'll usually want to pass a function like the following:
```javascript
onChange = selectState => this.setState(selectState)
```

ActiveSelect's extensive API allows you to customise every part of the component, this includes the container component, the select component, the selected option component and the available option component.

#### Customising Select component
You can pass your custom select component through ActiveSelect's `selectComponent` prop.
ActiveSelect will inject the following props to the Select component:
* `focused`: (**PropTypes.bool**) indicates if select tag is currently focused.
* `setFocus`: (**PropTypes.func**) sets focus for the component. Expects a boolean parameter, and will coerce values to boolean.
* `toggleFocus`: (**PropTypes.func**) toggles focus for the component.
* `selectedOptions`: (**PropTypes.arrayOf(PropTypes.element)**) Array of all selected options.
* `availableOptions`: (**PropTypes.arrayOf(PropTypes.element)**) Array of all the available options.

#### Customising SelectedOption component
You can pass your custom select component through ActiveSelect's `selectedOptionComponent` prop.
ActiveSelect will inject the following props to the SelectedOption component:
* `option`: (**PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })**) Option object.
* `unselectOption`: (**PropTypes.func**) unselects this option when called.

#### Customising AvailableOption component
You can pass your custom select component through ActiveSelect's `availableOptionComponent` prop.
ActiveSelect will inject the following props to the AvailableOption component:
* `option`: (**PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })**) Option object.
* `selectOption`: (**PropTypes.func**) selects this option when called.


### Advanced example

The following example shows how easy it is to customise each component.

```javascript
import React from 'react';
import ActiveSelect from 'active-select';

const availableOptions = [
  { value: '1', label: 'Miami' },
  { value: '2', label: 'New York' },
  { value: '3', label: 'Seattle' },
  { value: '4', label: 'Sidney' },
  { value: '5', label: 'Buenos Aires' },
];

const CustomSelect = ({ focused, availableOptions, selectedOptions, toggleActive }) => (
  <div onClick={toggleActive}>
    <div>{selectedOptions}</div>
    {focused &&
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

class MyCustomCitySelect extends Component {
  state = {}
  onChange = selectState => this.setState(selectState)

  render() {
    return (
      <ActiveSelect
        onChange={this.onChange}
        availableOptions={availableOptions}
        focused={this.state.focused}
        selectedOptions={this.state.selectedOptions}
        selectComponent={CustomSelect}
        availableOptionComponent={CustomAvailableOption}
        selectedOptionComponent={CustomSelectedOption}
      />
    );
  }
}

class App extends React.Component {
  render() {
    <MyCustomCitySelect />
  }
}
```

## Contributing
See the TODO.md file for missing features, and just throw in a PR or submit an issue if something breaks.
