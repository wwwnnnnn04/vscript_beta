import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import ButtonAuth from '../ButtonAuth/ButtonAuth';

const Header = () => {
  const linkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? '700' : '500',
    };
  };

  return (
    <nav className={s.container}>
      <section className={s.logo}>VScript</section>
      <div className={s.menu}>
        <NavLink to='/' className={s.link} style={linkStyle}>
          Главная
        </NavLink>
        <NavLink to='/test' className={s.link} style={linkStyle}>
          Курсы
        </NavLink>
        <NavLink to='/test' className={s.link} style={linkStyle}>
          Детям
        </NavLink>
      </div>
      <ButtonAuth />
    </nav>
  );
};

export default Header;
