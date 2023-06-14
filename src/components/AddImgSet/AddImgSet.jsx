import React, { useState, useContext } from 'react';
import s from './AddImgSet.module.css';
import Avatar from 'react-avatar-edit';
import img from '../../assets/img/profile image.png';

import { Dialog } from 'primereact/dialog';
import { CourseContext } from '../../context';

const AddImgSet = () => {
  const [imgCrop, setImgCrop] = useState(false);
  const [visible, setVisible] = useState(false);
  const [storeImg, setStoreImg] = useState([]);
  const { profileImg, setProfileImg } = useContext(CourseContext);

  const onCrop = (view) => {
    setImgCrop(view);
  };
  const onClose = () => {
    setImgCrop(null);
  };

  const saveImg = () => {
    setStoreImg([...storeImg, { imgCrop }]);
    setVisible(false);
    console.log(profileImgShow);
  };
  let profileImgShow = storeImg.map((item) => item.imgCrop);
  // setProfileImg(profileImgShow);
  return (
    <div className={s.box}>
      <img
        className={s.img}
        src={profileImgShow.length ? profileImgShow : img}
        alt=''
      />
      <button className={s.title} onClick={() => setVisible(true)}>
        Изменить фото
      </button>
      <Dialog
        visible={visible}
        modal
        className={s.modal}
        onHide={() => setVisible(false)}
      >
        <Avatar width={300} height={300} onClose={onClose} onCrop={onCrop} />
        <button
          onClick={() => {
            saveImg();
          }}
          className={s.but}
        >
          Сохранить
        </button>
      </Dialog>
    </div>
  );
};

export default AddImgSet;
