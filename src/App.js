import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CourseContext } from './context.js';
import Home from './pages/Home/Home.jsx';
import CourseGallery from './pages/courseGallery/CourseGallery.jsx';
import CourseGalleryKids from './pages/courseGalleryKids/CourseGalleryKids.jsx';
import AboutCourse from './pages/aboutCourse/AboutCourse.jsx';
import Test from './components/Header/Test.jsx';
import PersonalArea from './pages/personalArea/PersonalArea.jsx';
import SettingsArea from './pages/settingsArea/SettingsArea.jsx';
import LessonsCourse from './pages/lessonsCourse/LessonsCourse.jsx';
import CardsLesson from './pages/cardsLesson/CardsLesson.jsx';

function App() {
  const [clickCourse, setClickCourse] = useState(0);
  const [clickLesson, setClickLesson] = useState(0);
  const [urlVideo, setUrlVideo] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [numPage, setNumPage] = useState(1);
  const [profileImg, setProfileImg] = useState('');
  const [idInfo, setIdInfo] = useState(0);

  return (
    <CourseContext.Provider
      value={{
        clickCourse,
        setClickCourse,
        clickLesson,
        setClickLesson,
        urlVideo,
        setUrlVideo,
        login,
        setLogin,
        password,
        setPassword,
        numPage,
        setNumPage,
        profileImg,
        setProfileImg,
        idInfo,
        setIdInfo,
      }}
    >
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path='courseGallery' element={<CourseGallery />} />
          <Route path='courseGalleryKids' element={<CourseGalleryKids />} />
          <Route path='aboutCourse' element={<AboutCourse />} />
          <Route path='personalArea' element={<PersonalArea />} />
          <Route path='settingsArea' element={<SettingsArea />} />
          <Route path='lessonsCourse' element={<LessonsCourse />} />
          <Route path='cardsLesson' element={<CardsLesson />} />
          <Route path='test' element={<Test />} />
        </Route>
      </Routes>
    </CourseContext.Provider>
  );
}

export default App;
