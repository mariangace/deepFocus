import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop, faPause } from "@fortawesome/free-solid-svg-icons";
import "./Timer.css";

const DEFAULT_TIME = 5;

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(DEFAULT_TIME * 60); // 45 minutes in seconds
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (!isActive && timeLeft !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const reset = () => {
    setTimeLeft(DEFAULT_TIME * 60);
    setIsActive(false);
  };

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="timer f-headline tl mb0">
          {Math.floor(timeLeft / 60) < 10
            ? "0" + Math.floor(timeLeft / 60)
            : Math.floor(timeLeft / 60)}
          :{timeLeft % 60 < 10 ? "0" + (timeLeft % 60) : timeLeft % 60}
        </h1>
      </div>
      <div className="flex justify-center">
        <span className="pa2 tc pointer" onClick={() => setIsActive(true)}>
          <FontAwesomeIcon icon={faPlay} />
        </span>
        <span className="pa2 tc pointer" onClick={() => setIsActive(false)}>
          <FontAwesomeIcon icon={faPause} />
        </span>
        <span className="pa2 tc pointer" onClick={reset}>
          <FontAwesomeIcon icon={faStop} />
        </span>
      </div>
    </div>
  );
}
