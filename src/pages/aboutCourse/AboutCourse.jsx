import React from 'react';
import s from './AboutCourse.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AboutCourseHeader from '../../components/AboutCourseHeader/AboutCourseHeader.jsx';
import AboutCourseDescrp from '../../components/AboutCourseDescrp/AboutCourseDescrp.jsx';
import AboutCourseResume from '../../components/AboutCourseResume/AboutCourseResume';
import HowCourse from '../../components/HowCourse/HowCourse';

const AboutCourse = () => {
  return (
    <div>
      <div className={s.body}>
        <Header />
        <AboutCourseHeader />
      </div>
      <AboutCourseDescrp />
      <AboutCourseResume />
      <HowCourse />
      <Footer />
    </div>
  );
};

export default AboutCourse;
