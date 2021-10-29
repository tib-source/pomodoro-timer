import React, { useState, useEffect } from "react";
import Incrementer from "./Incrementer";

function Timer() {
  const [sessionTimer, setSessionTimer] = useState(25 * 60);
  const [breakTimer, setBreakTimer] = useState(5 * 60);
  const [activeBreak, setActiveBreak] = useState(false);
  const [displayTimer, setDisplayTimer] = useState(sessionTimer);
  // let minutes = timer
  // let seconds = 0
  const [paused, setPaused] = useState(true);

  const formatTimer = () => {
    //
    const minutes = Math.floor(displayTimer / 60);
    const seconds = displayTimer % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const playAudio = () => {};

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const decrement = () => {
    if (displayTimer === 0) {
      return;
    } else {
      setDisplayTimer((prev) => {
        if (prev === 1) {
          // if activeBreak is true -> timer will reset to 25 minutes else it will reset to 5 minutes
          setTimeout(() => {
            if (activeBreak) {
              return reset(true, "Session");
            } else {
              playAudio();
              return reset(true, "Break");
            }
          }, 1000);
          return 0;
        } else {
          return prev - 1;
        }
      });
    }
  };

  const reset = (breakSession = false, type = false) => {
    if (breakSession === false) {
      setSessionTimer(25 * 60);
      setDisplayTimer(25 * 60);
      setBreakTimer(5 * 60);
      setActiveBreak(false);
      setPaused(true);
      return "reset complete";
    } else {
      if ((type = "Break")) {
        setActiveBreak(true);
        setDisplayTimer(breakTimer);
      } else {
        setActiveBreak(false);
        setDisplayTimer(sessionTimer);
      }
    }
  };

  useEffect(() => {
    let timerId = null;
    if (!paused) {
      timerId = setInterval(decrement, 1000);
    } else {
      if (displayTimer !== "25:00") {
        clearInterval();
      }
    }

    return () => clearInterval(timerId);
  }, [paused, decrement, displayTimer]);

  const handleStartStop = (event) => {
    if (paused) {
      setPaused(false);
    } else if (!paused) {
      setPaused(true);
    }

    // if(timer === 0 && seconds === 0){ handleStartStop()}
    // if(seconds === 0){
    //     minutes--
    //     seconds = 59
    // }else{
    //     seconds--
    // }
  };

  const handleIncrement = (ammount, type) => {
    if (paused) {
      if (type === "Break") {
        setBreakTimer((prev) => {
          if (prev + ammount <= 0) {
            return prev;
          }
          if (prev + ammount > 60 * 60) {
            return prev;
          }
          return prev + ammount;
        });
        if (activeBreak) {
          setDisplayTimer(breakTimer);
        }
      } else {
        setSessionTimer((prev) => {
          if (prev + ammount <= 0) {
            return prev;
          }
          if (prev + ammount > 60 * 60) {
            return prev;
          }
          return prev + ammount;
        });
        if (!activeBreak) {
          setDisplayTimer((prev) => {
            if (sessionTimer + ammount == 0) {
              return sessionTimer;
            }
            return sessionTimer + ammount;
          });
        }
      }
    }
  };
  return (
    <div className="container">
      <div className="top">
        <Incrementer
          paused={paused}
          state={Math.floor(sessionTimer / 60)}
          handleIncrement={handleIncrement}
          title={"Session"}
        />
        <Incrementer
          paused={paused}
          state={Math.floor(breakTimer / 60)}
          title={"Break"}
          handleIncrement={handleIncrement}
        />
      </div>
      <div className="timer">
        <h2 id="timer-label">{activeBreak ? "Break Time!" : "Focus Time!"}</h2>
        <h1 id="time-left">{formatTimer()}</h1>
        <div className="timer__butons">
          <button onClick={(e) => handleStartStop(e)} id="start_stop">
            {paused ? "Start" : "Pause"}
          </button>
          <button onClick={() => reset()} id="reset">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
