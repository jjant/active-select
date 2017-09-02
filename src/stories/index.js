import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, number, object } from '@storybook/addon-knobs';
import MyCitySelect, { availableOptions } from './default';

const stories = storiesOf('ActiveSelect', module);

console.log(React.Component);

stories.addDecorator(withKnobs);

stories.add('with default props', () => {
  const multi = boolean('Multi', true);
  const searchable = boolean('Searchable', false);
  const noOptionsRemainingPlaceholder = text('No options remaining placeholder', 'No options remaining :(');
  const options = object('Available options', { availableOptions }); // workaround until knobs gets fixed

  return (
    <MyCitySelect
      noOptionsRemainingPlaceholder={noOptionsRemainingPlaceholder}
      searchable={searchable}
      multi={multi}
      options={options.availableOptions}
    />
  );
});
