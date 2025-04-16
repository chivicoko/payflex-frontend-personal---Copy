import { AccessTime } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'

const CountDownTimer = () => {
    
  // countdown
  const calculateTimeLeft = (targetDate: Date) => {
    const difference = +targetDate - +new Date();
    let timeLeft = {
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(() => {
    // Set the target date to exactly one week from now
    const oneWeekFromNow = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
    return calculateTimeLeft(oneWeekFromNow);
  });

  useEffect(() => {
    const targetDate = new Date(new Date().getTime() + 5 * 60 * 1000);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <span className='space-x-2'>
      <AccessTime style={{fontSize: '16px'}} />
      <span className="text-center">
        <strong>{timeLeft.minutes} :</strong>
        <strong>{timeLeft.seconds}</strong>
      </span>
    </span>
  )
}

export default CountDownTimer