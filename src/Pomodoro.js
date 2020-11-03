import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Pomodoro() {
  const [timerRunning, settimerRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    mins: 25,
    secs: 0,
  });
  const [totalTime, setTotalTime] = useState();
  const [userDef, setUserDef] = useState({
    pomo: 25,
    break: 5,
  });

  // Takes the time given by the user, and sets it in the timer
  const calculateTimeLeft = () => {
    const pomoTime = timeLeft;

    let time = {
      mins: pomoTime,
      secs: Math.floor((pomoTime / 1000) % 60),
    };

    if (time.secs <= 0) {
      time.mins = time.mins - 1;
      time.secs = 60;
    } else {
      time.secs = time.secs - 1;
    }

    //setInterval(() => {
    //  setTimeLeft({ mins: timeLeft.mins, secs: timeLeft.secs });
    //});
    return time;
  };

  useEffect(() => {
    console.log("CALLEDDSD");

    const timer = setTimeout(() => {
      console.log(timeLeft);
      setTimeLeft(calculateTimeLeft(timeLeft));
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      <div>Title</div>
      <div>sadasdsd</div>
      <div>
        <button>Start</button>
        <button>Pause</button>
        <button>Stop</button>
      </div>
    </div>
  );
}
