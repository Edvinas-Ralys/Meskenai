import "./App.scss";
import Create from "./components/Create";
import Show from "./components/Show";
import Lottie from "react-lottie";
import data from "./components/Animation/data.json";
import fireworks from "./components/Animation/fireworks.json";

import { useState, useEffect } from "react";

function App() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const [timeEnd, setTimeEnd] = useState(false);

  const defaultOptionsWalking = {
    loop: true,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptionsFireworks = {
    loop: true,
    autoplay: true,
    animationData: fireworks,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(
    (_) => {
      let interval;
      if (seconds > 60) {
        setMinutes(seconds / 60 - (((seconds % 60) * 100) / 60) * 0.01);
        setSeconds(seconds % 60);
      }
      if (startTimer) {
        interval = setInterval((_) => {
          setSeconds((s) => s - 1);
        }, 1000);
      } else if (!startTimer) {
        clearInterval(interval);
      }
      return (_) => clearInterval(interval);
    },
    [startTimer, setMinutes, setSeconds, seconds]
  );
  const resetTime = (_) => {
    setMinutes(0);
    setSeconds(0);
    startTimer && setStartTimer(!startTimer);
    setTimeEnd(false);
  };

  useEffect(
    (_) => {
      if (seconds === -1 && minutes > 0) {
        setSeconds(59);
        setMinutes((m) => m - 1);
      }
      if (seconds === 0 && minutes === 0 && startTimer) {
        setTimeEnd(!timeEnd);
        resetTime();
        setTimeEnd(true);
      }
    },
    [seconds, minutes]
  );

  return (
    <div className="main">
      <p>Set a timer</p>
      {!startTimer ? (
        <Create
          seconds={seconds}
          minutes={minutes}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
        />
      ) : (
        <Show minutes={minutes} seconds={seconds} />
      )}
      <div className="buttons">
        {!startTimer ? (
          <button
            className={seconds > 0 || minutes > 0 ? `acive` : `inactive`}
            onClick={(_) => setStartTimer(!startTimer)}
          >
            Start
          </button>
        ) : minutes > 0 || seconds > 0 ? (
          <button onClick={(_) => setStartTimer(!startTimer)}>Stop</button>
        ) : null}
        <button
          className={
            seconds > 0 || minutes > 0 || timeEnd ? `acive` : `inactive`
          }
          onClick={resetTime}
        >
          Reset
        </button>
      </div>
      <div className="animation">
        {(startTimer || timeEnd) && (
          <Lottie options={defaultOptionsWalking} height={400} width={400} />
        )}
      </div>
      <div className="fireworks-left">
        {timeEnd && (
          <Lottie options={defaultOptionsFireworks} height={700} width={700} />
        )}
      </div>
      <div className="fireworks-right">
        {timeEnd && (
          <Lottie options={defaultOptionsFireworks} height={700} width={700} />
        )}
      </div>
    </div>
  );
}

export default App;
