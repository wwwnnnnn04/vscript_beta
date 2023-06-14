import React from 'react';
import s from './SettingsArea.module.css';
import PersonalMenu from '../../components/PersonalMenu/PersonalMenu';
import InfoArea from '../../components/InfoArea/InfoArea';

const SettingsArea = () => {
  return (
    <div className={s.container}>
      <PersonalMenu />
      <InfoArea />
    </div>
  );
};

export default SettingsArea;
