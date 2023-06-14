import React from 'react';
import AboutDescription from '../AboutDescription/AboutDescription';
import s from './AboutCourseDescrp.module.css';

const AboutCourseDescrp = () => {
  const desc = [
    {
      id: 0,
      logo: 'JS',
      title: 'Писать код',
      des: 'Изучите синтаксис, области применения и лучшие практики.',
    },
    {
      id: 1,
      logo: 'DOM',
      title: 'Использовать в браузере',
      des: 'Научитесь использовать для взаимодействия с сервером, работать с DOM и событиями.',
    },
    {
      id: 2,
      logo: '{i}',
      title: 'Использовать разные подходы к разработке',
      des: 'Изучите синтаксис, области применения и лучшие практики.',
    },
  ];
  return (
    <div className={s.container}>
      <h4 className={s.title}>Чему вы научитесь?</h4>
      <div className={s.body}>
        {desc.map((item) => (
          <AboutDescription item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default AboutCourseDescrp;
