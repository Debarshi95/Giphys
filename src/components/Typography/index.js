/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import './index.css';

const variantsMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
};

const Typography = ({ children, component, variant, ...props }) => {
  const Component = variantsMapping[component] ?? 'p';

  return (
    <Component {...props} className={`Typography__root Typography--${variant}`}>
      {children}
    </Component>
  );
};

Typography.defaultProps = {
  component: 'h2',
  variant: 'h2',
  children: '',
};
export default Typography;
