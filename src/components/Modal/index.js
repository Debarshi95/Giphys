import React from 'react';
import { createPortal } from 'react-dom';
import './index.css';

const Modal = ({ children, handleModal }) => {
  return createPortal(
    <div className="Modal__root" onClick={handleModal} aria-hidden>
      {children}
    </div>,
    document.body
  );
};

export default Modal;
