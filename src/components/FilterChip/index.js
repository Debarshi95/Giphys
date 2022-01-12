import React, { memo } from 'react';
import Typography from '../Typography';
import './index.css';

const FilterChip = ({ children, icon, text, handlePopup }) => {
  console.log('FILTERCHIP re-rendered');
  return (
    <div
      className="FilterChip__root"
      onClick={(e) => {
        handlePopup(text);
        e.stopPropagation();
      }}
      aria-hidden
      role="button"
    >
      <div className="FilterChip__actions">
        {icon && <p>{icon}</p>}
        <Typography variant="body2">{text}</Typography>
      </div>
      {children}
    </div>
  );
};

export default memo(FilterChip);
