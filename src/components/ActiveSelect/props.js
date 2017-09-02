import PropTypes from 'prop-types';

import DefaultAvailableOption from '../DefaultAvailableOption/DefaultAvailableOption';
import DefaultSelect from '../DefaultSelect/DefaultSelect';
import DefaultSearch from '../DefaultSearch/DefaultSearch';

export default {
  propTypes: {
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })).isRequired,
    selectedOptions: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })).isRequired,
    focused: PropTypes.bool,
    selectComponent: PropTypes.func,
    availableOptionComponent: PropTypes.func,
    selectedOptionComponent: PropTypes.func,
    searchComponent: PropTypes.func,
    searchParams: PropTypes.shape({}),
    searchable: PropTypes.bool,
    noOptionsRemainingPlaceholder: PropTypes.string,
    multi: PropTypes.bool,
  },
  defaultProps: {
    selectedOptions: [],
    searchParams: {},
    focused: false,
    selectComponent: DefaultSelect,
    availableOptionComponent: DefaultAvailableOption,
    selectedOptionComponent: null,
    searchComponent: DefaultSearch,
    searchable: false,
    noOptionsRemainingPlaceholder: 'No options left :(',
    multi: false,
  },
};
