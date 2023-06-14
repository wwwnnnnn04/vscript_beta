import React from 'react';
import s from './Modal.module.css';

const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? [s.modal, s.active].join(' ') : s.modal}
      onClick={() => setActive(false)}
    >
      <div
        className={
          active ? [s.modal__content, s.active].join(' ') : s.modal__content
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
