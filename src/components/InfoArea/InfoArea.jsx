import React from 'react';
import s from './InfoArea.module.css';
import AddImgSet from '../AddImgSet/AddImgSet.jsx';
import SettingName from '../SettingName/SettingName.jsx';
import SettingEmail from '../SettingEmail/SettingEmail';

const InfoArea = () => {
  return (
    <div className={s.box}>
      <AddImgSet />
      <div className={s.info}>
        <SettingName />
        <SettingEmail />
      </div>
    </div>
  );
};

export default InfoArea;
