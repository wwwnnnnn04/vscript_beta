import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import CourseGallery from './pages/courseGallery/CourseGallery.jsx';

function App() {
  return (
    <Routes>
      <Route>
        <Route index element={<Home />} />
        <Route path='courseGallery' element={<CourseGallery />} />
      </Route>
    </Routes>
  );
}

export default App;
