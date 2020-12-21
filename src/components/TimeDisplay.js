import React from "react";

export default function TimeDisplay({ time }) {
  let mins = Math.floor(time / 60);
  let secs = time - mins * 60;

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
