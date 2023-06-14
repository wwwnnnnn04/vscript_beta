import React, { useContext, useState } from 'react';
import s from './CardsLesson.module.css';
import { CourseContext } from '../../context';
import data from '../../info.json';
import Video from '../../components/Video/Video';
import mp from '../../assets/video/lesson1.mkv';
import { NavLink } from 'react-router-dom';
import img from '../../assets/svg/back_arrow.svg';
import left_arrow from '../../assets/svg/left.svg';
import right_arrow from '../../assets/svg/right.svg';
import CardLesson from '../../components/cardLesson/CardLesson';

const CardsLesson = () => {
  const { clickLesson, clickCourse, setNumPage, numPage } =
    useContext(CourseContext);
  const name_card =
    data.courses[clickCourse].lessons[clickLesson].card_lesson[numPage - 1]
      .name_card;
  const content =
    data.courses[clickCourse].lessons[clickLesson].card_lesson[numPage - 1]
      .content;
  const url_video = data.courses[clickCourse].lessons[clickLesson].card_lesson[
    numPage - 1
  ].url_video
    ? data.courses[clickCourse].lessons[clickLesson].card_lesson[numPage - 1]
        .url_video
    : '';

  const id = [];
  let num = 1;
  data.courses[clickCourse].lessons[clickLesson].card_lesson.map((card) => {
    id.push(card.id_card + 1);
  });

  const forward = () => {
    if (
      num <= id.length &&
      num !== data.courses[clickCourse].lessons[clickLesson].card_lesson.length
    ) {
      setNumPage(id[num]);
      console.log(id[num]);
      console.log('NUM', num);
      ++num;
      console.log('for', numPage);
    }
    return num;
  };
  const back = () => {
    if (numPage > 1) {
      num = numPage - 2;

      setNumPage(id[num]);
      console.log(id[num]);
      console.log('NUM', num);

      console.log('for', numPage);
    } else {
      console.log('wxit');
    }
    return num;
  };

  return (
    <div className={s.box}>
      <div className={s.head}>
        <NavLink to={'/lessonsCourse'}>
          <img src={img} className={s.link_back} />
        </NavLink>
        <span className={s.name}>
          {data.courses[clickCourse].lessons[clickLesson].name_lesson}
        </span>
      </div>
      <CardLesson
        name_card={name_card}
        content={content}
        url_video={url_video}
      />
      <div className={s.carusel}>
        <button className={s.but} onClick={back}>
          <img src={left_arrow} />
        </button>
        <span className={s.num}>
          {numPage}
          <span className={s.span}>из</span>
          {data.courses[clickCourse].lessons[clickLesson].card_lesson.length}
        </span>
        <button className={s.but} onClick={forward}>
          <img src={right_arrow} />
        </button>
      </div>
    </div>
  );
};

export default CardsLesson;
