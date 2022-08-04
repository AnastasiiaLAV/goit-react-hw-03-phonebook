import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({onChange, value}) => {
    return (
        <label htmlFor="filter">
            Find contacts by name 
            <input type="text" name="filter" onChange={onChange} value={value} />
        </label>
    )
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;