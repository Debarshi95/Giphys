/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React from 'react';
import './index.css';

const Button = ({ type, variant, children, ...rest }) => {
  return (
    <button type={type} {...rest} className={`Button__root Button--${variant}`}>
      {children}
    </button>
  );
};

export default Button;
