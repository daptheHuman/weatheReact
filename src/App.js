import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LazyMotion, domAnimation } from 'framer-motion';
import Weather from './routes/weather';
import Search from './routes/search';
import NotFound from './routes/404';

const App = () => {
  useEffect(() => {
    document.title = 'weatherReact';
  }, []);

  return (
    <div className=" bg-gradient-to-l from-baby-blue to-blue-crayola">
      <LazyMotion features={domAnimation}>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/search/" element={<Weather />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LazyMotion>
    </div>
  );
};

export default App;
