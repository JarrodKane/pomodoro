import React, { useState, useEffect } from "react";
//import styled from "styled-components";

import useInterval from "../hooks/useIneterval";

export default function Pomodoro() {
  const [timerRunning, setTimerRunning] = useState(false);
  const [count, setCount] = useState(0);
  const [userDef, setUserDef] = useState({
    pomo: 25,
    break: 5,
  });

  useInterval(() => {
    // Your custom logic here
    setCount(count + 1);
  }, timerRunning);

  //Starts the timer running
  const handleStart = () => {
    setTimerRunning(true);
  };

  const handleStop = () => {
    setTimerRunning(false);
  };

  //TODO - Need to make a setTime, so that this gets passed into state, and
  //then gets passed into CalculateTimeLeft

  return (
    <div>
      <div>Title</div>
      <div>{count}</div>
      <div>
        <button onClick={handleStart}>Start</button>
        <button>Pause</button>
        <button onClick={handleStop}> Stop</button>
      </div>
    </div>
  );
}
