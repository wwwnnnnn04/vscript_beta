import React from 'react';
import ButtonComment from '../ButtonComment/ButtonComment';
import CommentSlider from '../CommentSlider/CommentSlider';
import s from './Comment.module.css';

const Comment = () => {
  return (
    <div className={s.container}>
      <div className={s.comment}>
        <h3 className={s.title}>Отзывы</h3>
        <CommentSlider />
      </div>
      <div className={s.but}>
        <ButtonComment />
      </div>
    </div>
  );
};

export default Comment;
