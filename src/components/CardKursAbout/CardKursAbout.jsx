import React from 'react';
import s from './CardKursAbout.module.css';
import ItemCard from '../ItemCard/ItemCard';
import ButtonCard from '../ButtonCard/ButtonCard';

const CardKursAbout = () => {
  const cardInfo = [
    {
      id: '1',
      title: 'JavaScript',
      item: [
        { id: 1, title: 'Портфолио - твой итоговый проект' },
        { id: 2, title: 'Обучение в удобное время!' },
        { id: 3, title: 'Доступ ко всему курсу сразу' },
        { id: 4, title: 'От 14 лет и старше' },
      ],
      bgColor: '#45286c',
    },
    {
      id: '2',
      title: 'Python',
      item: [
        { id: 5, title: 'Портфолио - твой итоговый проект' },
        { id: 6, title: 'Обучение в удобное время!' },
        { id: 7, title: 'Доступ ко всему курсу сразу' },
        { id: 8, title: 'От 14 лет и старше' },
      ],
      bgColor: '#1a095a',
    },
  ];

  return (
    <div className={s.container}>
      {cardInfo.map((item, i) => {
        return (
          <div
            className={s.card}
            style={{ backgroundColor: item.bgColor }}
            key={i}
          >
            <i style={{ backgroundColor: item.bgColor }} className={s.title}>
              {item.title}
            </i>
            <ItemCard item={item.item} bgColor={item.bgColor} />
            <hr className={s.line} />
            {/* <ButtonCard /> */}
          </div>
        );
      })}
    </div>
  );
};

export default CardKursAbout;
