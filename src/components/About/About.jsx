import React from 'react';
import s from './About.module.css';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div className={s.container}>
      <div className={s.logo_container}>
        <section className={s.logo}>VScript</section>
        <section className={s.text}>
          Никогда не поздно познать новый мир, а с VScript это можно сделать
          проще!
        </section>
        <NavLink to='/courseGallery' className={s.link}>
          <button className={s.but}>Выбрать курс</button>
        </NavLink>
      </div>
    </div>
  );
};

export default About;
