import React from 'react';
import iconChild from '../../assets/svg/icon-child.svg';
import iconChildren from '../../assets/svg/icon-children.svg';
import iconStatic from '../../assets/svg/icon-static.svg';
import iconTime from '../../assets/svg/icon-time.svg';
import iconVideo from '../../assets/svg/icon-video.svg';
import CardKursAbout from '../CardKursAbout/CardKursAbout';
import s from './HomeAbout.module.css';

const HomeAbout = () => {
  return (
    <div>
      <div className={s.description}>
        <h2 className={s.h2}>Почему именно VScript?</h2>
        <table className={s.table}>
          <thead>
            <tr>
              <td className={s.tr}>
                <div className={s.descr_container}>
                  <img src={iconChild} className={s.svg} alt='icon' />
                  <section className={s.descr}>Более 1000 учеников!</section>
                </div>
              </td>
              <td className={s.tr}>
                <div className={s.descr_container}>
                  <img src={iconTime} className={s.svg} alt='icon' />
                  <section className={s.descr}>
                    Получение курса без временных ограничений!
                  </section>
                </div>
              </td>
            </tr>
            <tr>
              <td className={s.tr}>
                <div className={s.descr_container}>
                  <img src={iconVideo} className={s.svg} alt='icon' />
                  <section className={s.descr}>
                    Обучение по готовым видеоурокам!
                  </section>
                </div>
              </td>
              <td className={s.tr}>
                <div className={s.descr_container}>
                  <img src={iconStatic} className={s.svg} alt='icon' />

                  <section className={s.descr}>
                    Более 70% наших выпускников трудоустроились в IT!
                  </section>
                </div>
              </td>
            </tr>
          </thead>
        </table>
        <div className={s.descr_container}>
          <img src={iconChildren} className={s.svg} alt='icon' />
          <section className={s.descr}>
            Обучение детей основам программирования от 6 до 14 лет!
          </section>
        </div>
        <h2 className={[s.h2, s.h2_margin].join(' ')}>
          JavaScript и Python - 2 самых популярных и востребованных языка
        </h2>
        <section className={s.section_descr}>
          IT компании находятся в постоянном поиске программистов данных
          направлений! Спрос на таких специалистов растет с каждым годом!
        </section>
      </div>
    </div>
  );
};

export default HomeAbout;
