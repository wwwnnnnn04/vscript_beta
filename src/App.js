import { Route, Routes } from 'react-router-dom';
import Test from './components/Header/Test';
import Home from './pages/Home/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        {/* <Route index element={<Home />} /> */}
        <Route path='test' element={<Test />} />
      </Route>
    </Routes>
  );
}

export default App;
