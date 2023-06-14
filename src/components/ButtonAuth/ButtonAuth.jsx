import React, { useState, useContext } from 'react';
import s from './ButtonAuth.module.css';
import iconBut from '../../assets/svg/but-arrow.svg';
import Modal from '../Modal/Modal.jsx';
import data from '../../info.json';
import { NavLink } from 'react-router-dom';
import { CourseContext } from '../../context';
import SettingsArea from '../../pages/settingsArea/SettingsArea';

const ButtonAuth = () => {
  const [modalActive, setModalActive] = useState(false);
  const { login, setLogin, password, setPassword } = useContext(CourseContext);
  const [inpLogin, setInpLogin] = useState('');
  const [inpPass, setInpPass] = useState('');

  const auth = () => {
    console.log(inpLogin, inpPass);
    setLogin(inpLogin);
    setPassword(inpPass);
    setInpLogin('');
    setInpPass('');
    if (
      (data.users[0].user_login == inpLogin &&
        data.users[0].password == inpPass) ||
      (data.users[1].user_login == inpLogin &&
        data.users[1].password == inpPass)
    ) {
      console.log('ok');
    } else {
      console.log('not');
    }
  };

  return (
    <>
      <button
        className={[s.but, s.but_login].join(' ')}
        onClick={() => setModalActive(true)}
      >
        <img src={iconBut} className={s.svg} alt='icon' />
        Вход
      </button>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className={s.container}>
          <span className={s.title}>Вход</span>
          <div className={s.box}>
            <input
              type='email'
              placeholder='Логин'
              value={inpLogin}
              onChange={(e) => setInpLogin(e.target.value)}
              className={s.inp}
            />
            <input
              type='password'
              placeholder='Пароль'
              value={inpPass}
              onChange={(e) => setInpPass(e.target.value)}
              className={s.inp}
            />
          </div>

          {/* <NavLink to='/settingsArea'> */}
          <button onClick={auth} className={s.log}>
            Войти
          </button>
          {/* </NavLink> */}
        </div>
      </Modal>
    </>
  );
};

export default ButtonAuth;
