import { defaultSearchFunction, textSearchFunction } from '../DefaultSearch/DefaultSearch';
import DefaultSelectedOption from '../DefaultSelectedOption/DefaultSelectedOption';
import SingleSelectedOption from '../DefaultSelectedOption/SingleSelectedOption';

const _renderNothing = () => null;

const getSelectOption = ({ multi, onChange, selectedOptions }) => {
  const selectSingleOption = option => onChange({ selectedOptions: [option] });
  const selectMultiOption = option => onChange({ selectedOptions: [...selectedOptions, option] });

  return multi ? selectMultiOption : selectSingleOption;
};

const getUnselectOption = ({ multi, onChange, selectedOptions }) => {
  const unselectMultiOption = option => onChange({
    selectedOptions: selectedOptions.filter(selectedOption => selectedOption !== option),
  });
  const unselectSingleOption = () => onChange({ selectedOptions: [] });

  return multi ? unselectMultiOption : unselectSingleOption;
};

const getSearchFunction = ({ searchable }) => {
  return searchable ? textSearchFunction : defaultSearchFunction;
};

const getAvailableOptions = ({ searchable, searchParams, options }) => {
  return getSearchFunction({ searchable })({ searchParams, options });
};

const getSearchComponent = ({ searchable, searchComponent }) => {
  return searchable ? searchComponent : _renderNothing;
};

const getSetFocus = ({ onChange }) => {
  return focused => onChange({ focused });
};

const getSetSearchParams = ({ onChange }) => {
  return (searchParams) => {
    onChange({ searchParams });
  };
};

const getToggleFocus = ({ onChange, focused }) => {
  return (event) => {
    event.stopPropagation();
    onChange({ focused: !focused });
  };
};

const getSelectedOptionComponent = ({ selectedOptionComponent, multi }) => {
  return selectedOptionComponent || (multi ? DefaultSelectedOption : SingleSelectedOption);
};

const buildFunctions = component => ({
  getSearchComponent: () => getSearchComponent(component.props),
  getSetSearchParams: () => getSetSearchParams(component.props),
  getSetFocus: () => getSetFocus(component.props),
  getToggleFocus: () => getToggleFocus(component.props),
  getAvailableOptions: () => getAvailableOptions(component.props),
  getSelectOption: () => getSelectOption(component.props),
  getUnselectOption: () => getUnselectOption(component.props),
  getSelectedOptionComponent: () => getSelectedOptionComponent(component.props),
});

export default buildFunctions;
