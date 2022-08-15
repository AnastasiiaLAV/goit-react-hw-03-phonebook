import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

const Filter = ({onChange, value}) => {
    return (
        <Label htmlFor="filter">
            Find contacts by name 
            <Input type="text" name="filter" onChange={onChange} value={value} />
        </Label>
    )
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;