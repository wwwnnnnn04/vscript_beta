import React from 'react';
import s from './ItemCard.module.css';

const ItemCard = (props) => {
  return (
    <>
      {props.item.map((i) => {
        return (
          <div
            className={s.info}
            style={{ backgroundColor: props.bgColor }}
            key={i.id}
          >
            <hr className={s.line} />
            <h3 style={{ backgroundColor: props.bgColor }} className={s.h}>
              {i.title}
            </h3>
          </div>
        );
      })}
    </>
  );
};

export default ItemCard;
