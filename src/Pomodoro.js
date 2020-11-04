import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Pomodoro() {
  const [timerRunning, setTimerRunning] = useState();
  const [timeLeft, setTimeLeft] = useState();
  const [totalTime, setTotalTime] = useState();
  const [userDef, setUserDef] = useState({
    pomo: 25,
    break: 5,
  });

  // Takes the time given by the user, and sets it in the timer
  const calculateTimeLeft = (timeGiven = 25) => {
    const time = timeGiven - 1;
    console.log(time);
    if (time <= 0) {
      setTimerRunning(false);
      return 0;
    } else {
      return time;
    }
  };

  // This gets called each time there is an update, it then counts a second
  // before setting the time to be one less
  // It checks to make sure the app is running first, just incase it has been
  // paused
  useEffect(() => {
    if (timerRunning) {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft(timeLeft));
      }, 1000);

      return () => clearTimeout(timer);
    }
  });

  //Starts the timer running
  const handleStart = () => {
    setTimerRunning(true);
  };

  //TODO - Need to make a setTime, so that this gets passed into state, and
  //then gets passed into CalculateTimeLeft

  return (
    <div>
      <div>Title</div>
      <div>{timeLeft}</div>
      <div>
        <button onClick={handleStart}>Start</button>
        <button>Pause</button>
        <button>Stop</button>
      </div>
    </div>
  );
}
