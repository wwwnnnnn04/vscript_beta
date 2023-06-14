import React, { useContext } from 'react';
import s from './SoderCourse.module.css';
import { NavLink } from 'react-router-dom';
import { CourseContext } from '../../context';

const SoderCourse = (props) => {
  const { setClickLesson } = useContext(CourseContext);
  return (
    <div className={s.box}>
      <div className={s.title_box}>
        <span className={s.title}>{props.name_lesson}</span>
        <span className={s.count_card}>Слайды: {props.count_card}</span>
      </div>
      <NavLink to='/cardsLesson' className={s.link}>
        <button
          onClick={() => {
            setClickLesson(props.id_lesson);
          }}
          className={s.but}
        >
          Открыть урок
        </button>
      </NavLink>
    </div>
  );
};

export default SoderCourse;
