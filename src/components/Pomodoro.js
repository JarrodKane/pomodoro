import React, { useState } from "react";
//import styled from "styled-components";

import useInterval from "../hooks/useIneterval";
import TimeDisplay from "./TimeDisplay";
import { changeToSecs } from "../helpers/timeChange";

export default function Pomodoro() {
  const [timerRunning, setTimerRunning] = useState(false);
  const [count, setCount] = useState(0);
  const [downTime, setDownTime] = useState(false);
  const [useSesh, setUseSesh] = useState(25);
  const [breakTime, setsetbreakTime] = useState(5);

  // Once it hits the last second, it will instally give you a 5 min break
  // If it was already in downtime it'll swap right across to a 25min
  useInterval(() => {
    if (count === 1 && downTime === false) {
      setDownTime(true);
      setCount(changeToSecs(breakTime));
    } else if (count === 1 && downTime === true) {
      setDownTime(false);
      setCount(changeToSecs(useSesh));
    } else {
      setCount(count - 1);
    }
  }, timerRunning);

  //Starts the timer running
  const handleStart = () => {
    setTimerRunning(true);
    if (count === 0) {
      setCount(changeToSecs(useSesh));
    } else {
      setCount(count);
    }
  };

  // Pauses the timer
  const handleStop = () => {
    setTimerRunning(false);
  };

  // Resets the timer to the set session for the user
  const handleRestart = () => {
    setCount(changeToSecs(useSesh));
    setTimerRunning(true);
  };

  const handleChangeTime = (e) => {
    const value = e.target.className;
    if (value === "+") {
      setUseSesh(useSesh + 1);
    } else {
      setUseSesh(useSesh - 1);
    }
  };

  return (
    <div>
      <h1>Pomodoro Timer</h1>
      <div>
        <TimeDisplay time={count} />
      </div>
      <div>
        {!timerRunning ? (
          <button onClick={handleStart}>Start</button>
        ) : (
          <button onClick={handleStop}> Stop</button>
        )}

        <button onClick={handleRestart}> restart</button>
      </div>
      <div>
        <h2>Session Length</h2>
        <div>
          <button className="+" onClick={handleChangeTime}>
            +
          </button>
          <p>{useSesh}</p>
          <button className="-" onClick={handleChangeTime}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}
