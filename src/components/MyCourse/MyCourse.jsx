import React from 'react';
import s from './MyCourse.module.css';
import CardAddCourse from '../CardAddCourse/CardAddCourse';
import NoneCourse from '../NoneCourse/NoneCourse';
import data from '../../info.json';

const MyCourse = () => {
  if (data.courses.length > 0) {
    return (
      <>
        {data.courses.map((less) => {
          return (
            <CardAddCourse
              key={less.id_course}
              name={less.name_course}
              count={less.lessons.length}
              id={less.id_course}
            />
          );
        })}
      </>
    );
  } else {
    return <NoneCourse />;
  }
};

export default MyCourse;
