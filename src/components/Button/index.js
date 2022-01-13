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

Button.defaultProps = {
  type: 'button',
  variant: 'contained',
  children: 'Button',
};

export default Button;
