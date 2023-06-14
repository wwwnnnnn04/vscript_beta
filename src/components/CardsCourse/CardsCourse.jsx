import React from 'react';
import CardCourse from '../CardCourse/CardCourse';

import s from './CardsCourse.module.css';

const CardsCourse = () => {
  const mas = [
    {
      id: 1,
      title: 'Fronted - для новичков',
      logo: 'img4',
      description:
        'Вы освоите основы frontend разработки и на практике, сможете создавать интерактивные сайты и вырасти как веб-разработчик.',
    },
    {
      id: 2,
      title: 'JavaScript  - для новичков',
      logo: 'img1',
      description:
        'Научитесь создавать приложения и сайты, работать с JavaScript и системой Git. Сможете получить должность в IT-компании или работать на фрилансе.',
    },
    {
      id: 3,
      title: 'Python - для новичков',
      logo: 'img2',
      description:
        'Вы освоите язык Python и на практике, сможете создавать интерактивные сайты и вырасти как веб-разработчик.',
    },
    {
      id: 4,
      title: 'React.js',
      logo: 'img3',
      description:
        'Вы сможете прокачать профессиональные навыки в области написания программ, используя фреймворк React.js. ',
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

export default CardsCourse;
