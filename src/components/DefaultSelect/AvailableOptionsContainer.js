import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid #36558F;
  border-top: 0;
  border-radius: 0 0 3px 3px;
  max-height: 200px;
  overflow-y: auto;
`;

const NoOptionsLeftContainer = styled.span`
  color: darkgray;
  height: 30px;
  line-height: 30px;
  padding-left: 10px;
  font-size: 12px;
  text-align: left;
  user-select: none;
  cursor: default;
`;

class AvailableOptionsContainer extends Component {
  render() {
    const noOptions = this.props.children.length === 0;
    const noOptionsLeftComponent = <NoOptionsLeftContainer>{this.props.noOptionsRemainingPlaceholder}</NoOptionsLeftContainer>;
    const children = noOptions ? noOptionsLeftComponent : this.props.children;

    return (
      <Container>
        {children}
      </Container>
    );
  }
}

AvailableOptionsContainer.propTypes = {
  noOptionsRemainingPlaceholder: PropTypes.string.isRequired,
}

export default AvailableOptionsContainer;
