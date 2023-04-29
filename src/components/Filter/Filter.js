import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export class Filter extends Component {
  render() {
    return (
      <Label>
        Find contacts by name
        <Input type="text" name="filter" onChange={this.props.onChange} />
      </Label>
    );
  }
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
