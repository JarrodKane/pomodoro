import React, { useState, useEffect } from "react";
//import styled from "styled-components";

import useInterval from "../hooks/useIneterval";
import TimeDisplay from "./TimeDisplay";

export default function Pomodoro() {
  const [timerRunning, setTimerRunning] = useState(false);
  const [count, setCount] = useState(0);
  const [userDef, setUserDef] = useState({
    pomo: 25,
    break: 5,
  });

  let session = 25;

  useInterval(() => {
    // Your custom logic here
    setCount(count - 1);
  }, timerRunning);

  //Starts the timer running
  const handleStart = () => {
    setTimerRunning(true);
    setCount(changeToSecs(session));
  };

  const handleStop = () => {
    setTimerRunning(false);
  };

  const handleRestart = () => {
    setCount(changeToSecs(session));
    setTimerRunning(true);
  };

  return (
    <div>
      <div>Title</div>
      <div>
        <TimeDisplay time={count} />
      </div>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}> Stop</button>
        <button onClick={handleRestart}> restart</button>
      </div>
      <div>
        <h2>Session Length</h2>
        <p>Length:</p>
      </div>
    </div>
  );
}

const changeToSecs = (secs) => secs * 60;
