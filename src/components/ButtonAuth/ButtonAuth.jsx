import React from 'react';
import s from './ButtonAuth.module.css';
import iconBut from '../../assets/svg/but-arrow.svg';

const ButtonAuth = () => {
  return (
    <div className={s.container}>
      <button className={[s.but, s.but_registration].join(' ')}>
        Регистрация
      </button>
      <button className={[s.but, s.but_login].join(' ')}>
        <img src={iconBut} className={s.svg} alt='icon' />
        Вход
      </button>
    </div>
  );
};

export default ButtonAuth;
