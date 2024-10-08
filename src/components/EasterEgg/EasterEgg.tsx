'use client';
import React from 'react';

const EasterEgg = () => {
    const [activated, setActivated] = React.useState(false);
  
    return (
      <div>
        <button 
          onClick={() => setActivated(!activated)}
          className="hidden-button"
          style={{ opacity: 0, position: 'fixed', bottom: '10px', right: '10px' }}
        >
          Easter Egg
        </button>
        {activated && <a href='https://github.com/jordanfh1/top-secret'><p className="easter-egg">Top secret, click if you wish to proceed... 🕵️‍♂️</p></a>}
      </div>
    );
  };
  

  export default EasterEgg;