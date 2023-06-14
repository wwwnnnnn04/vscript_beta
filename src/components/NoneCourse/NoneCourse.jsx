import React from 'react';
import s from './NoneCourse.module.css';
import { NavLink } from 'react-router-dom';

const NoneCourse = () => {
  return (
    <div className={s.container}>
      <div className={s.text}>
        <span className={s.span}>У вас пока нет курсов</span>
        <span className={s.rec}>Рекомендуем заглянуть в каталог</span>
      </div>
      <div>
        <NavLink to='/courseGallery' className={s.link}>
          <button className={s.but}>Выбрать курс</button>
        </NavLink>
      </div>
    </div>
  );
};

export default NoneCourse;
