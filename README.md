# ActiveSelect

#### Props
ActiveSelect expects the following props to be passed:
* `availableOptions`: (**PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })).isRequired**) an array of the options to be rendered.
* `focused`: (**PropTypes.bool.isRequired**) value indicating if the component is currently focused.
* `selectedOptions`: (**PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })).isRequired**) an array containing the currently selected options.
* `onChange`: (**PropTypes.func**) function responsible of properly updating the state for the component to work. You'll usually want to pass a function like the following:
`onChange = selectState => this.setState(selectState)`{.javascript}

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

ActiveSelect's extensive API allows you to customise every part of the component, this includes the container component, the select component, the selected option component and the available option component.


##### Customizing Select component
You can pass your custom select component through ActiveSelect's `selectComponent` prop.
ActiveSelect will inject the following props to the Select component:
* `focused`: (**PropTypes.bool**) indicates if select tag is currently focused.
* `setFocus`: (**PropTypes.func**) sets focus for the component. Expects a boolean parameter, and will coerce values to boolean.
* `toggleFocus`: (**PropTypes.func**) toggles focus for the component.
* `selectedOptions`: (**PropTypes.arrayOf(PropTypes.element)**) Array of all selected options.
* `availableOptions`: (**PropTypes.arrayOf(PropTypes.element)**) Array of all the available options.

##### Customizing SelectedOption component
You can pass your custom select component through ActiveSelect's `selectedOptionComponent` prop.
ActiveSelect will inject the following props to the SelectedOption component:
* `option`: (**PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })**) Option object.
* `unselectOption`: (**PropTypes.func**) unselects this option when called.

##### Customizing AvailableOption component
You can pass your custom select component through ActiveSelect's `availableOptionComponent` prop.
ActiveSelect will inject the following props to the AvailableOption component:
* `option`: (**PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })**) Option object.
* `selectOption`: (**PropTypes.func**) selects this option when called.


The following example shows how easy it is to customize each component.

```javascript
import React from 'react';
import ActiveSelect from 'active-select';

const options = [
  { label: 'Miami', value: '1' },
  { label: 'New York', value: '2' },
  { label: 'Sidney', value: '3' },
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
