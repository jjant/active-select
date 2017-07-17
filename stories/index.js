import React from 'react';

import { storiesOf } from '@storybook/react';

import ActiveSelect from '../lib';

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

const CustomAvailableOptions = ({ option }) => (
  <div style={{ background: 'black', opacity: option.value / 10, width: '100%', height: '50px' }}>
    <span style={{ color: 'white', fontSize: 2 * option.value }}>Opacity and size go up with option.value ({option.value})!</span>
  </div>
);

const CustomSelectComponent = ({ availableOptions, selectedOptions }) => (
  <div style={{ width: '400px', display: 'flex', flexWrap: 'wrap' }}>
    {availableOptions.map(option => <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', width: '100px', borderRadius: '100%', background: 'black', color: 'white' }}>{option}</div>)}
  </div>
);

storiesOf('ActiveSelect').add('Focused', () => <ActiveSelect availableOptions={availableOptions} focused />)
                         .add('With option selected', () => <ActiveSelect availableOptions={availableOptions} focused selectedOptions={[availableOptions[0]]} />)
                         .add('With custom availableOptionComponent', () => <ActiveSelect availableOptions={availableOptions} focused selectedOptions={[availableOptions[0]]} availableOptionComponent={CustomAvailableOptions} />)
                         .add('With custom selectComponent', () => <ActiveSelect availableOptions={availableOptions} focused selectedOptions={[availableOptions[0]]} selectComponent={CustomSelectComponent} />);
