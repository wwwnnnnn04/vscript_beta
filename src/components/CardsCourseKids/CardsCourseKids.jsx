import React from 'react';
import CardCourse from '../CardCourse/CardCourse';

import s from './CardsCourseKids.module.css';

const CardsCourseKids = () => {
  const mas = [
    {
      id: 1,
      title: 'Python - с нуля',
      logo: 'img1',
      description:
        'Вы освоите язык Python и на практике, сможете создавать сайты и приложения, а так же рисовать с помощью Python.',
    },
    {
      id: 2,
      title: 'HTML',
      logo: 'img2',
      description:
        'Вы освоите язык Python и на практике, сможете создавать интерактивные сайты и вырасти как веб-разработчик.',
    },
    {
      id: 3,
      title: 'App Inventor',
      logo: 'img3',
      description:
        'Вы сможете прокачать профессиональные навыки в области написания программ, используя фреймворк React.js. ',
    },
    {
      id: 4,
      title: 'Scratch - продвинутый',
      logo: 'img4',
      description:
        'Вы освоите язык JavaScript и на практике, сможете создавать интерактивные сайты и вырасти как веб-разработчик.',
    },
  ];
  return (
    <div className={s.container}>
      {mas.map((card) => (
        <CardCourse card={card} key={card.id} />
      ))}
    </div>
  );
};

export default CardsCourseKids;
