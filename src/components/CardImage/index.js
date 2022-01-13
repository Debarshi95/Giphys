import React from 'react';
import './index.css';

const CardImage = ({ url, alt }) => {
  return <img src={url} alt={alt} className="CardImage__root" />;
};

CardImage.defaultProps = {
  url: '',
  alt: 'cardimage',
};
export default CardImage;
