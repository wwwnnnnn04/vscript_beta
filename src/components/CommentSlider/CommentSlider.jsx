import React, { useState } from 'react';
import s from './CommentSlider.module.css';
import dataSlider from './dataSlider';

const CommentSlider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className={s.container_slider}>
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              slideIndex === index + 1
                ? [s.slide, s.active_anim].join(' ')
                : s.slide
            }
          >
            <div className={s.head_slide}>
              <h4 className={s.title}>{obj.name}</h4>
              <h4 className={s.subTitle}>{obj.subTitle}</h4>
            </div>
            <div className={s.container_deckr}>
              <h4 className={s.deckr}>{obj.deckr}</h4>
            </div>
          </div>
        );
      })}

      <div className={s.container_dots}>
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={
              slideIndex === index + 1 ? [s.dot, s.active].join(' ') : s.dot
            }
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CommentSlider;
