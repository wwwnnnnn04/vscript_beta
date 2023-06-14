import React from 'react';
import Header from '../../components/Header/Header.jsx';
import About from '../../components/About/About.jsx';
import FormApplication from '../../components/FormApplication/FormApplication.jsx';
import Comment from '../../components/Comment/Comment.jsx';
import s from './Home.module.css';
import Footer from '../../components/Footer/Footer.jsx';
import HomeAbout from '../../components/HomeAbout/HomeAbout.jsx';
import CardKursAbout from '../../components/CardKursAbout/CardKursAbout.jsx';

const Home = () => {
  return (
    <div className={s.container}>
      <div className={s.body}>
        <Header />
        <About />
      </div>
      <HomeAbout />
      <CardKursAbout />
      {/* <FormApplication />
      <Comment /> */}
      <Footer />
    </div>
  );
};

export default Home;
