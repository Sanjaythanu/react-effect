import React, { useEffect, useState } from 'react';

function TimerApp() {
  // state to store seconds
  const [seconds, setSeconds] = useState(0);

  // state to control timer
  const [running, setRunning] = useState(false);

  // effect to handle timer logic
  useEffect(() => {
    let timer;

    if (running) {
      timer = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }

    // cleanup function
    return () => clearInterval(timer);
  }, [running]);

  return (
    <div>
      <h2>Timer Application</h2>
      <p>{seconds} Seconds</p>

      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button onClick={() => {
        setRunning(false);
        setSeconds(0);
      }}>
        Reset
      </button>
    </div>
  );
}

export default TimerApp;
