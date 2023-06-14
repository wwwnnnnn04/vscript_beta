import React from 'react';
import s from './CourseGallery.module.css';
import Header from '../../components/Header/Header.jsx';
import CardsCourse from '../../components/CardsCourse/CardsCourse.jsx';
import Footer from '../../components/Footer/Footer.jsx';

const CourseGallery = () => {
  return (
    <div>
      <Header />
      <CardsCourse />
      <Footer />
    </div>
  );
};

export default CourseGallery;
