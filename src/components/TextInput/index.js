import React, { forwardRef, useState } from 'react';
import './index.css';

const TextInput = forwardRef(({ type, name, onChange, className, ...props }, ref) => {
  const [input, setInput] = useState('');

  const handleOnChange = (e) => {
    const { value } = e.target;
    if (typeof onChange === 'function') {
      onChange(value);
    }
    setInput(value);
    e.stopPropagation();
  };
  return (
    <input
      ref={ref}
      type={type}
      name={name}
      className={`TextInput__root ${className}`}
      onChange={handleOnChange}
      value={input}
      {...props}
      autoComplete="off"
    />
  );
});

export default TextInput;
