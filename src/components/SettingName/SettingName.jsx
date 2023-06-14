import React, { useState } from 'react';
import s from './SettingName.module.css';
import Modal from '../Modal/Modal.jsx';

const SettingName = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className={s.box}>
      <span className={s.title}>Рената Аллахвердиева</span>
      <button className={s.but} onClick={() => setModalActive(true)}>
        Изменить имя
      </button>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className={s.container}>
          <span className={s.name}>Изменить имя</span>
          <div className={s.box_inp}>
            <input
              type='text'
              placeholder='Введите новое имя'
              className={s.inp}
            />
          </div>
          <button className={s.log}>Сохранить</button>
        </div>
      </Modal>
    </div>
  );
};

export default SettingName;
