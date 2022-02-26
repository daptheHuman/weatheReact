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
    <div className="min-h-screen bg-gradient-to-l from-baby-blue to-blue-crayola">
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/search/" element={<Weather />} />
      </Routes>
    </div>
  );
};

export default App;
