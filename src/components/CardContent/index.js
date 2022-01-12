import React from 'react';

const CardContent = ({ children, className, ...props }) => {
  return (
    <section className={className} {...props}>
      {children}
    </section>
  );
};

export default CardContent;
