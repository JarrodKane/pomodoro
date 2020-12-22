import React, { useState } from "react";
import styled from "styled-components";

import TimeDisplay from "./TimeDisplay";
import { changeToSecs } from "../helpers/timeChange";

// This styled component takes in a prop to display the background differntly
// TODO: Have it display the colors different based on the countdown seconds
const Pomo = styled.div`
   ${(props) =>
     props.run
       ? "background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);"
       : "background: linear-gradient(-45deg, #33ff7c, #e233ff, #C70039 ,  #FF5733 );"};

background-size: 400% 400%;
animation: gradient 15s ease infinite;
}

@keyframes gradient {
0% {
  background-position: 0% 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0% 50%;
}

`;

export default function Pomodoro() {
  const [timerRunning, setTimerRunning] = useState(false);
  const [count, setCount] = useState(0);
  const [downTime, setDownTime] = useState(false);
  const [useSesh, setUseSesh] = useState(25);
  const [breakTime, setsetbreakTime] = useState(5);

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
    <Pomo run={timerRunning}>
      <h1>Pomodoro Timer</h1>
      <div>
        <TimeDisplay
          time={count}
          downTime={downTime}
          setDownTime={setDownTime}
          setCount={setCount}
          timerRunning={timerRunning}
          breakTime={breakTime}
          useSesh={useSesh}
        />
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
    </Pomo>
  );
}
