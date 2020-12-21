import React, { useState, useEffect, useRef } from "react";

//Taken from https://overreacted.io/making-setinterval-declarative-with-react-hooks/

const useInterval = (cb, running) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = cb;
  }, [cb]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    if (running === true) {
      let id = setInterval(tick, 1000);
      return () => clearInterval(id);
    }
  }, [running]);
};

export default useInterval;
