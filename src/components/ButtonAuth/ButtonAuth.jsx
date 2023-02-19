import React from 'react';
import s from './ButtonAuth.module.css';

const ButtonAuth = () => {
  return (
    <div className={s.container}>
      <button className={[s.but, s.but_registration].join(' ')}>
        Регистрация
      </button>
      <button className={[s.but, s.but_login].join(' ')}>
        <svg
          width='12'
          height='12'
          viewBox='0 0 12 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={s.svg}
        >
          <path
            d='M5.87512 1L10.875 6.00003L5.87512 11.0001'
            stroke='white'
            stroke-width='1.27039'
          />
          <path d='M10.901 6.0022H0' stroke='white' stroke-width='1.27039' />
        </svg>
        Вход
      </button>
    </div>
  );
};

export default ButtonAuth;
