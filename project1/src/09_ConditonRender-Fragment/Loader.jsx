import React, { useState, useEffect } from 'react';
import "./Loder.css"
export default function Loader() {
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

  //  return ()=> clearTimeout(timeout);
  }, []); 
  return (
    <div className='maindiv'>
      {isLoading && (
         <div class="center">
         <div class="ring "></div>
         <span>Loading....</span>
     </div>)
    }
    </div>
  );
}


