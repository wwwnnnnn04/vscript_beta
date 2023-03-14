import React from 'react';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <div className={s.container}>
      <Logo />
      <Menu />
    </div>
  );
};

export default Footer;
