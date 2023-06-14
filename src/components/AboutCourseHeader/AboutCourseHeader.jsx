import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import s from './AboutCourseHeader.module.css';
import img from '../../assets/svg/back_arrow.svg';
import data from '../../info.json';
import { CourseContext } from '../../context';

const AboutCourseHeader = () => {
  const { idInfo } = useContext(CourseContext);
  const name_course_first = data.info[idInfo - 1].name_course_first;
  const name_course_last = data.info[idInfo - 1].name_course_last;
  return (
    <div className={s.container}>
      <NavLink to={'/courseGallery'}>
        <img src={img} className={s.link_back} />
      </NavLink>
      <div className={s.body}>
        <h2 className={s.title}>
          {name_course_first} <br /> {name_course_last}
        </h2>
        {/* <h4 className={s.price}>150 BYN</h4> */}
        <NavLink to={'/personalArea'} className={s.but}>
          Начать
        </NavLink>
      </div>
    </div>
  );
};

export default AboutCourseHeader;
