import React from 'react';
import s from './CourseGalleryKids.module.css';
import Header from '../../components/Header/Header.jsx';
import CardsCourseKids from '../../components/CardsCourseKids/CardsCourseKids.jsx';
import Footer from '../../components/Footer/Footer.jsx';

const CourseGalleryKids = () => {
  return (
    <div>
      <Header />
      <CardsCourseKids />
      <Footer />
    </div>
  );
};

export default CourseGalleryKids;
