import React, { useState } from 'react';
import s from './ButtonReg.module.css';
import iconBut from '../../assets/svg/but-arrow.svg';
import Modal from '../Modal/Modal.jsx';
import { NavLink } from 'react-router-dom';

const ButtonReg = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <button
        className={[s.but, s.but_registration].join(' ')}
        onClick={() => setModalActive(true)}
      >
        Регистрация
      </button>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className={s.container}>
          <span className={s.title}>Регистрация</span>
          <div className={s.box}>
            <input
              type='email'
              placeholder='Придумайте логин'
              className={s.inp}
            />
            <input
              type='password'
              placeholder='Придумайте пароль'
              className={s.inp}
            />
          </div>
          <NavLink to='/settingsArea'>
            <button className={s.log}>Регистрация</button>
          </NavLink>
        </div>
      </Modal>
    </>
  );
};

export default ButtonReg;
