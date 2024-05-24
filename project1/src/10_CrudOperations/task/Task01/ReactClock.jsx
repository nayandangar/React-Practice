import React from 'react'
import { useEffect, useState } from 'react';
import Clock from 'react-clock';

export default function ReactClock() {  

  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className=' p-4 rounded bg-success text-light w-100'>
      <h3>Your Time Is</h3>
      <Clock value={value} />
    </div>
  );
}
