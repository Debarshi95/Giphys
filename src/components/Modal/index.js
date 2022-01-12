import React from 'react';
import './index.css';

const Modal = ({ children, handleModal }) => {
  return (
    <article className="Modal__root" onClick={handleModal} aria-hidden>
      {children}
    </article>
  );
};

export default Modal;
