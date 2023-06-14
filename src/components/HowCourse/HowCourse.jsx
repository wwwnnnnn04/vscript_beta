import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './HowCourse.module.css';

const HowCourse = () => {
  return (
    <div className={s.container}>
      <h4 className={s.title}>Как проходить курс?</h4>
      <div className={s.block}>
        <div className={s.info}>
          <h4 className={s.h4}>01</h4>
          <h4 className={s.head}>Весь материал разбит на небольшие уроки</h4>
          <h5 className={s.des}>
            Теория и практика подаются маленькими порциями. Так вам будет легче
            усваивать новые знания.
          </h5>
        </div>
        <div className={[s.info, s.border].join(' ')}>
          <h4 className={s.h4}>02</h4>
          <h4 className={s.head}>Обучение через практику</h4>
          <h5 className={s.des}>
            Всё, что вы узнали, вы тут же начинаете применять на практике. Вы
            сразу видите результаты своего труда.
          </h5>
        </div>
        <div className={s.info}>
          <h4 className={s.h4}>03</h4>
          <h4 className={s.head}>Нет ограничений по времени</h4>
          <h5 className={s.des}>
            Можно совмещать учёбу с работой и другими делами. Не нужно
            выпрашивать академический отпуск, если пришлось сделать перерыв.
          </h5>
        </div>
      </div>
      <NavLink to={'/personalArea'} className={s.but}>
        Начать обучение
      </NavLink>
    </div>
  );
};

export default HowCourse;
