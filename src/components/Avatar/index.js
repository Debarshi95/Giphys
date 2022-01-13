import React from 'react';
import './index.css';

const avatarStyles = {
  borderRadius: '50%',
};

const imgStyles = {
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
};

const Avatar = ({ url, width, height }) => {
  return (
    <div style={{ width, height, ...avatarStyles }}>
      <img src={url || './assets/user_placeholder.webp'} alt="avatar" style={imgStyles} />
    </div>
  );
};

Avatar.defaultProps = {
  url: '',
  width: '4rem',
  height: '4rem',
};

export default Avatar;
