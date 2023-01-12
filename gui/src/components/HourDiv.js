import React, { useState, useEffect } from 'react';
function HourDiv() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="DateHourDiv">
      <div>{time.getHours()<10?"0"+time.getHours():time.getHours()}:{time.getMinutes()<10?"0"+time.getMinutes():time.getMinutes()}:{time.getSeconds()<10?"0"+time.getSeconds():time.getSeconds()}</div>
    </div>
  );
}

export default HourDiv;
