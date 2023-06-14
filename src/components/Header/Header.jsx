import React from 'react';
import s from './Header.module.css';
import ButtonAuth from '../ButtonAuth/ButtonAuth';
import Menu from '../Menu/Menu';
import Logo from '../Logo/Logo';
import ButtonReg from '../ButtonReg/ButtonReg';

const Header = () => {
  return (
    <nav className={s.container}>
      <Logo />
      <Menu />
      <div className={s.but}>
        <ButtonReg />
        <ButtonAuth />
      </div>
    </nav>
  );
};

export default Header;
