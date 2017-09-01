import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput';

export function defaultSearchFunction({ searchParams = {}, options }) {
  return options;
};

export function textSearchFunction({ searchParams, options }) {
  const { text = "" } = searchParams;
  const newOptions = options.filter(option =>
    option.label.toLowerCase().includes(text.toLowerCase())
  );
  return newOptions;
};

class DefaultSearch extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props == nextProps;
  }
  handleChange = e => this.props.setSearchParams({ text: e.target.value });

  render() {
    return (
      <SearchInput
        type="text"
        value={this.props.searchParams.text}
        onChange={this.handleChange}
      />
    );
  }
}

DefaultSearch.propTypes = {
  searchParams: PropTypes.shape({}).isRequired,
  setSearchParams: PropTypes.func.isRequired,
};

export default DefaultSearch;
