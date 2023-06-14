import React, { useContext } from 'react';
import s from './AboutCourseResume.module.css';
import img from '../../assets/svg/profile.svg';
import data from '../../info.json';
import { CourseContext } from '../../context';

const AboutCourseResume = () => {
  const { idInfo } = useContext(CourseContext);
  const name_course_first = data.info[idInfo - 1].name_course_first;
  return (
    <div className={s.container}>
      <h4 className={s.title}>Резюме после прохождения курса</h4>
      <div className={s.body}>
        <div className={s.logo}>
          <img src={img} alt='profile' />
        </div>
        <div className={s.des}>
          <h4 className={s.h4}>{name_course_first} - разработчик</h4>
          <span className={s.price}>от 2 000 BYN</span>
        </div>
      </div>
      <div className={s.ul}>
        <h4 className={s.price}>Навыки:</h4>
        <ul>
          <li className={s.spisok}>{name_course_first}</li>
          <li className={s.spisok}>Знание ООП</li>
          <li className={s.spisok}>Git</li>
          <li className={s.spisok}>Знание различных подходов к разработке</li>
          <li className={s.spisok}>Владение инструментами отладки</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutCourseResume;
