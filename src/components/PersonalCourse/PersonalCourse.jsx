import React from 'react';
import s from './PersonalCourse.module.css';
import MyCourse from '../MyCourse/MyCourse';

const PersonalCourse = () => {
  return (
    <div className={s.container}>
      <span className={s.span}>Мои курсы</span>
      <div className={s.course}>
        <MyCourse />
      </div>
    </div>
  );
};

export default PersonalCourse;
