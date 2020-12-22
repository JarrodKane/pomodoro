import React from "react";

import useInterval from "../hooks/useIneterval";
import { changeToSecs } from "../helpers/timeChange";
export default function TimeDisplay({
  time,
  downTime,
  setDownTime,
  setCount,
  timerRunning,
  breakTime,
  useSesh,
}) {
  let mins = Math.floor(time / 60);
  let secs = time - mins * 60;

  useInterval(() => {
    if (time === 1 && downTime === false) {
      setDownTime(true);
      setCount(changeToSecs(breakTime));
    } else if (time === 1 && downTime === true) {
      setDownTime(false);
      setCount(changeToSecs(useSesh));
    } else {
      setCount(time - 1);
    }
  }, timerRunning);
  // This adds on the leading 0 to seconds if it's less than 10
  if (secs < 10) {
    secs = "0" + secs;
  }

  return (
    <div>
      {mins} : {secs}
    </div>
  );
}
