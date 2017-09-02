import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SelectedOptionContainer from './SelectContainer';
import AvailableOptionsContainer from './AvailableOptionsContainer';
import ArrowButton from './ArrowButton'

const Container = styled.div`
  width: 400px;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  * {
    box-sizing: border-box;
  }
`;

class DefaultSelect extends PureComponent {
  state = {
    active: false,
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }


  handleClick = () => this.props.setFocus(true);

  setWrapperRef = (node) => this.wrapperRef = node;

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target))
      this.props.setFocus(false);
  }

  render() {
    const Search = this.props.searchComponent;
    const {
      selectedOptions,
      availableOptions,
      focused,
      setFocus,
      toggleFocus,
    } = this.props;

    return (
      <Container
        innerRef={this.setWrapperRef}
        onFocus={this.handleClick}
      >
        <SelectedOptionContainer focused={this.props.focused}>
          {selectedOptions}
          <Search />
          <ArrowButton focused={focused} onClick={toggleFocus} />
        </SelectedOptionContainer>
        {focused &&
          <AvailableOptionsContainer noOptionsRemainingPlaceholder={this.props.noOptionsRemainingPlaceholder}>
            {availableOptions}
          </AvailableOptionsContainer>}
      </Container>
    );
  }
}

DefaultSelect.propTypes = {
  focused: PropTypes.bool.isRequired,
  setFocus: PropTypes.func.isRequired,
  toggleFocus: PropTypes.func.isRequired,
  selectedOptions: PropTypes.arrayOf(PropTypes.element).isRequired,
  availableOptions: PropTypes.arrayOf(PropTypes.element).isRequired,
  searchComponent: PropTypes.func.isRequired,
  noOptionsRemainingPlaceholder: PropTypes.string.isRequired,
};

export default DefaultSelect;
