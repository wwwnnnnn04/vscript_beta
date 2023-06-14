import React, { useContext } from 'react';
import s from './CardLesson.module.css';
import { CourseContext } from '../../context';
import data from '../../info.json';
import Video from '../../components/Video/Video';
import mp from '../../assets/video/lesson1.mkv';
import { NavLink } from 'react-router-dom';
import img from '../../assets/svg/back_arrow.svg';

const CardLesson = (props) => {
  const { clickLesson, clickCourse } = useContext(CourseContext);
  const videoOption = {
    controls: true,
    sources: [
      {
        // src: props.url_video,
        // base_url: `http://127.0.0.1:8000/api/`,
        src: '../../assets/video/lesson1.mkv',
        type: 'video',
      },
    ],
  };
  if (props.url_video !== '') {
    return (
      <div className={s.box}>
        <span className={s.title}>{props.name_card}</span>
        <span className={s.content}>{props.content}</span>
        {/* <Video options={videoOption} /> */}

        <video width={750} controls className={s.video}>
          <source src={props.url_video} />
        </video>
      </div>
    );
  } else {
    return (
      <div className={s.box}>
        <span className={s.title}>{props.name_card}</span>
        <span className={s.content}>{props.content}</span>
        <span className={s.vopr}>Где пишется основное тело веб-страницы?</span>
        <div>
          <select className={s.sel}>
            <option>head</option>
            <option>body</option>
            <option>footer</option>
          </select>
          <span className={s.otv}>Не верно</span>
        </div>
        <span className={s.vopr}>Какого тега не существует?</span>
        <div className={s.tt}>
          <select className={s.sel}>
            <option>head</option>
            <option>body</option>
            <option>vop</option>
          </select>
          <span className={s.otv}>Верно</span>
        </div>
      </div>
    );
  }
};

export default CardLesson;
