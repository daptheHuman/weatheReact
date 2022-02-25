import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Weather from './routes/weather';
import Search from './routes/search';

const App = () => {
  useEffect(() => {
    document.title = 'WheaterReact';
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/search/" element={<Weather />} />
    </Routes>
  );
};

export default App;
