import React, { useContext } from 'react';
import s from './LessonsCourse.module.css';
import { CourseContext } from '../../context';
import img from '../../assets/svg/back_arrow.svg';
import { NavLink } from 'react-router-dom';
import data from '../../info.json';
import SoderCourse from '../../components/SoderCourse/SoderCourse';

const LessonsCourse = () => {
  const { clickCourse } = useContext(CourseContext);
  return (
    <div className={s.container}>
      <div className={s.head}>
        <NavLink to={'/personalArea'}>
          <img src={img} className={s.link_back} />
        </NavLink>
        <span className={s.name}>{data.courses[clickCourse].name_course}</span>
      </div>
      <div className={s.card}>
        {data.courses[clickCourse].lessons.map((less) => {
          return (
            <SoderCourse
              name_lesson={less.name_lesson}
              id_lesson={less.id_lesson}
              count_card={less.card_lesson.length}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LessonsCourse;
