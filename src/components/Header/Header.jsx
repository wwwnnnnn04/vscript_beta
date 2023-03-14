import React from 'react';
import s from './Header.module.css';
import ButtonAuth from '../ButtonAuth/ButtonAuth';
import Menu from '../Menu/Menu';
import Logo from '../Logo/Logo';

const Header = () => {
  return (
    <nav className={s.container}>
      <Logo />
      <Menu />
      <ButtonAuth />
    </nav>
  );
};

export default Header;
