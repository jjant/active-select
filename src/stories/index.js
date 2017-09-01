import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, number, object } from '@storybook/addon-knobs';
import MyCitySelect, { availableOptions } from './default';

const stories = storiesOf('ActiveSelect', module);

stories.addDecorator(withKnobs);

stories.add('with default props', () => {
  const searchable = boolean('Searchable', false);
  const options = object('Available options', { availableOptions }); // workaround until knobs gets fixed

  return (
    <MyCitySelect
      searchable={searchable}
      availableOptions={options.availableOptions}
    />
  );
});
