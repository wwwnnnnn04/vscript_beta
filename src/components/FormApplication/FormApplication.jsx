import React from 'react';
import s from './FormApplication.module.css';

const FormApplication = () => {
  return (
    <div className={s.container}>
      <form className={s.form}>
        <div className={s.container_bg}>
          <h3 className={s.h3}>Оставьте заявку</h3>
          <section className={s.sect}>
            Остались вопросы? Оставьте Ваш телефон и мы свяжемся с Вами.
          </section>
          <input
            type='text'
            placeholder='Ваше имя'
            className={[s.input, s.input_name].join(' ')}
          />
          <input
            type='tel'
            placeholder='Ваш телефон'
            className={[s.input, s.input_phone].join(' ')}
          />
        </div>
        <button type='submit' className={s.but}>
          Консультация
        </button>
      </form>
    </div>
  );
};

export default FormApplication;
