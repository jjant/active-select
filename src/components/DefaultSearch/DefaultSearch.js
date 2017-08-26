import React from 'react';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput';

export function defaultSearchFunction({ searchArguments = {}, options }) {
  return options;
};

export function textSearchFunction({ searchArguments, options }) {
  const { searchText } = searchArguments;
  const newOptions = options.filter(option => option.label.include(searchText));
  return newOptions;
};

const DefaultSearch = ({ searchParams, changeSearchParams }) => (
  <SearchInput
    type="text"
    value={searchParams.text || ""}
    onChange={e => changeSearchParams({ text: e.target.value })}
  />
);

DefaultSearch.propTypes = {
  state: PropTypes.shape({}).isRequired,
  changeSearchParams: PropTypes.func.isRequired,
};

export default DefaultSearch;
