import React from 'react';
import s from './AboutDescription.module.css';

const AboutDescription = (props) => {
  return (
    <div className={s.body}>
      <div className={s.logo}>{props.item.logo}</div>
      <div className={s.desc}>
        <h4 className={s.title}>{props.item.title}</h4>
        <span className={s.description}>{props.item.des}</span>
      </div>
    </div>
  );
};

export default AboutDescription;
