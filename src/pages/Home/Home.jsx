import React from 'react';
import Header from '../../components/Header/Header';
import About from '../../components/About/About';
import s from './Home.module.css';

const Home = () => {
  return (
    <div className={s.test}>
      <Header />
      <About />
    </div>
  );
};

export default Home;
