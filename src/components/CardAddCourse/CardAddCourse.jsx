import React, { useContext } from 'react';
import s from './CardAddCourse.module.css';
import { NavLink } from 'react-router-dom';
import data from '../../info.json';
import { CourseContext } from '../../context';

const CardAddCourse = (props) => {
  const { setClickCourse } = useContext(CourseContext);
  return (
    <div className={s.container}>
      <span className={s.less}>{props.count} урока(-ов)</span>
      <span className={s.span}>{props.name}</span>
      <NavLink to='/lessonsCourse' className={s.link}>
        <button
          className={s.but}
          onClick={() => {
            setClickCourse(props.id);
          }}
        >
          Открыть курс
        </button>
      </NavLink>
    </div>
  );
};

export default CardAddCourse;
