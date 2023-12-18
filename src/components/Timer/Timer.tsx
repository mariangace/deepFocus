import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop, faPause } from "@fortawesome/free-solid-svg-icons";
import "./Timer.css";

const DEFAULT_TIME = 1 * 60;

interface TimerProps {
  onTimerComplete: () => void;
}

export default function Timer({ onTimerComplete }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(DEFAULT_TIME); // 45 minutes in seconds
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        if (timeLeft > 0) {
          setTimeLeft(timeLeft - 1);
        } else {
          onTimerComplete();
          reset();
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, onTimerComplete]);

  const reset = () => {
    setTimeLeft(DEFAULT_TIME);
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
