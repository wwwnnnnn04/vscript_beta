import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Menu.module.css';

const Menu = () => {
  const linkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? '700' : '500',
    };
  };
  return (
    <div className={s.menu}>
      <NavLink to='/' className={s.link} style={linkStyle}>
        Главная
      </NavLink>
      <NavLink to='/courseGallery' className={s.link} style={linkStyle}>
        Курсы
      </NavLink>
      <NavLink to='/test' className={s.link} style={linkStyle}>
        Детям
      </NavLink>
    </div>
  );
};

export default Menu;
