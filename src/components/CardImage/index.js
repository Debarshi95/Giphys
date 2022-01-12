import React from 'react';
import './index.css';

const CardImage = ({ url, alt }) => {
  return <img src={url} alt={alt || 'CardImage'} className="CardImage__root" />;
};

export default CardImage;
