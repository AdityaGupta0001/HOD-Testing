import React, { useState, useEffect } from 'react';
import './Timer.css';

const CountdownTimer = () => {
  const targetDate = new Date('2024-10-28T11:00:00'); // October 28th at 11 PM
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = targetDate - new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="timer-main relative bg-black p-8 text-white font-bold mt-12 mb-12 w-4/5 mx-auto text-center lg:mb-16" style={{ height: '70vh', fontFamily:"Hitmarker" }}>
      {/* Orange offset shadow */}  
      <div className="absolute inset-0 bg-orange-500 transform translate-x-2 translate-y-2 -z-10"></div>
      {/* Main content */}
      <div className="bg-black p-8 relative z-10 h-full flex flex-col justify-center items-center">
        <h2 className="timer-text text-5xl mb-4">Events In The Timer</h2>
        <h3 className="timer-text text-5xl mb-6">Are <span className="text-orange-500">CLOSER </span><span>Than They Appear...</span></h3>
        <div className="flex justify-center items-center space-x-4">
          {Object.entries(timeLeft).map(([key, value]) => (
            <div key={key} className="flex flex-col items-center">
              <div className="timer-box bg-gray-800 border-2 border-orange-500 rounded-lg p-4 shadow-lg">
                <span className={`timer-text mt-4 text-5xl mb-2 ${key === 'hours' ? 'text-orange-500' : ''}`}>
                  {value.toString().padStart(2, '0')}
                </span>
              </div>
              <span className="text-sm">{key}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 border-t border-orange-500 w-full"></div>
      </div>
    </div>
  );
}

export default CountdownTimer;
