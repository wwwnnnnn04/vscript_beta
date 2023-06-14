import React, { useContext } from 'react';
import s from './CardCourse.module.css';
import { NavLink } from 'react-router-dom';
import img1 from '../../assets/svg/programming.svg';
import img2 from '../../assets/svg/human.svg';
import img3 from '../../assets/svg/coding.svg';
import img4 from '../../assets/svg/company.svg';
import ButtonCourseCard from '../ButtonCourseCard/ButtonCourseCard';
import { CourseContext } from '../../context';

const CardCourse = (props) => {
  const img = [img1, img2, img3, img4];
  const logo = img[props.card.id - 1];
  const { setIdInfo } = useContext(CourseContext);

  return (
    <div className={s.container}>
      <div className={s.img}>
        <img src={logo} alt='icon-course' className={s.icon} />
      </div>
      <div className={s.info}>
        <h2 className={s.title}>{props.card.title}</h2>
        <p className={s.description}>{props.card.description}</p>
        <div className={s.but}>
          <NavLink
            to='/aboutCourse'
            className={s.link}
            onClick={() => {
              setIdInfo(props.card.id);
            }}
          >
            <ButtonCourseCard />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CardCourse;
