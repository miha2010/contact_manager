import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = ({
  label, name, value, placeholder, type, onChange, error
}) => {
  return (
    <div>
      <div className='form-group'>
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          className={classnames('form-control form-control-lg', { 'is-invalid': error })}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
        {error && <div className='invalid-feedback'>{error}</div>}
      </div>
    </div>
  );
}

TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

TextInputGroup.defaultProps = {
  type: 'text'
};

export default TextInputGroup;
