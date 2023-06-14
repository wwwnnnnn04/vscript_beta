import React from 'react';
import s from './PersonalArea.module.css';
import PersonalMenu from '../../components/PersonalMenu/PersonalMenu';
import PersonalCourse from '../../components/PersonalCourse/PersonalCourse.jsx';

const PersonalArea = () => {
  return (
    <div className={s.container}>
      <PersonalMenu />
      <PersonalCourse />
    </div>
  );
};

export default PersonalArea;
