import React, { useState } from 'react';
import '../Assets/Css/DigitalClock.css';
const DigitalClock = () => {
  let time = new Date().toLocaleTimeString();

  const [currentTime, setCurrentTime] = useState(time);

  let updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };

  setInterval(updateTime, 1000);

  let day = new Date().getDate();

  let month = new Date().getMonth() + 1;

  let year = new Date().getFullYear();

  let fullDate = day + ' / ' + month + ' / ' + year;

  return (
    <>
      <section>
        <div className='container'>
          <div>
            <p className='time-title mt-0'> Today's Date </p>
            <p className='todays-date'> {fullDate}</p>
          </div>
          <div>
            <p className='time-title'> Current Time </p>
            <p className='current-time'> {currentTime}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalClock;
