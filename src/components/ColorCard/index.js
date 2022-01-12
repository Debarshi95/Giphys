import React from 'react';

const cardStyles = {
  width: '2rem',
  height: '2rem',
  borderRadius: '0.15rem',
  margin: '0 0.5rem',
  cursor: 'pointer',
  border: '0.15rem solid var(--color-background-secondary)',
};
const ColorCard = ({ children, handleColorCard, background, ...props }) => {
  return (
    <div
      style={{ background, ...cardStyles }}
      onClick={handleColorCard}
      aria-hidden
      role="button"
      {...props}
    >
      {children}
    </div>
  );
};

export default ColorCard;
