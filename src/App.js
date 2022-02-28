import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Weather from './routes/weather';
import Search from './routes/search';
import NotFound from './routes/404';

const App = () => {
  useEffect(() => {
    document.title = 'weatherReact';
  }, []);

  return (
    <div className="h-full min-h-screen bg-gradient-to-l from-baby-blue to-blue-crayola">
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/search/" element={<Weather />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
