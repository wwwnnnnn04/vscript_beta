import React, { useContext } from 'react';
import s from './PersonalMenu.module.css';
import { NavLink } from 'react-router-dom';
import img from '../../assets/img/profile image.png';
import { CourseContext } from '../../context';

const PersonalMenu = () => {
  const { profileImg } = useContext(CourseContext);
  const linkStyle = ({ isActive }) => {
    return {
      color: isActive ? '#ffffff' : '#c4c4c4',
    };
  };
  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.logo_name}>VScript</div>
        <NavLink to='/test'>
          <img src={img} alt='profile' className={s.profile_img} />
        </NavLink>
      </div>
      <div className={s.menu}>
        <NavLink to='/' className={s.link} style={linkStyle}>
          Главная
        </NavLink>
        <NavLink to='/personalArea' className={s.link} style={linkStyle}>
          Моё обучение
        </NavLink>
        <NavLink to='/courseGallery' className={s.link} style={linkStyle}>
          Каталог курсов
        </NavLink>
        <NavLink to='/settingsArea' className={s.link} style={linkStyle}>
          Настройки профиля
        </NavLink>
      </div>
    </div>
  );
};

export default PersonalMenu;
