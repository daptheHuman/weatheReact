import { useState, useEffect } from 'react';

const Greet = () => {
  const date = new Date();
  const hour = date.getHours();

  const [greet, setGreet] = useState('');
  useEffect(() => {
    if (hour >= 0 && hour < 12) {
      setGreet('Good Morning');
    } else if (hour >= 12 && hour < 18) {
      setGreet('Good Afternoon');
    } else {
      setGreet('Good Evening');
    }
  }, [hour]);

  return greet;
};

export default Greet;
