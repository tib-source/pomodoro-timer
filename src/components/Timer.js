import React, { useState, useEffect } from "react";
import Incrementer from "./Incrementer";

function Timer() {
  const [timer, setTimer] = useState(25);
  const [_break, setBreak] = useState(5);
  const [fullTimer, setFullTimer] = useState(timer*60);
  const [activeBreak, setActiveBreak] = useState(false)
  // let minutes = timer
  // let seconds = 0
  const [paused, setPaused] = useState(true);

  const formatTimer = () => {
    //  return `${String(minutes.toString()).padStart(2,0)}:${String(seconds.toString()).padStart(2,0)}`
    const minutes = Math.floor(fullTimer / 60);
    const seconds = fullTimer % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const decrement = () => {
    if (fullTimer === 0) {
      return;
    } else {
      setFullTimer((prev) => {
        if (prev === 1) {
            setActiveBreak(true)
          reset(activeBreak) // if activeBreak is true -> timer will reset to 25 minutes else it will reset to 5 minutes
        } else {
          return prev - 1;
        }
      });
    }
  };

  const reset = (breakSession = false) => {
    if (!breakSession) {
      setBreak(5);
      setTimer(25);
      setFullTimer(timer * 60);
      setActiveBreak(false)
      return 'reset complete'
    }
    setFullTimer(_break * 60);
  };

  useEffect(() => {
    let timerId = null;
    if (!paused) {
      timerId = setInterval(decrement, 1000);
    } else {
      if (fullTimer !== "25:00") {
        clearInterval();
      }
    }

    return () => clearInterval(timerId);
  }, [paused, decrement]);

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

  

  return (
    <div className="contianer">
      <div className="top">
        <Incrementer
          paused={paused}
          state={timer}
          setState={setTimer}
          title={"Session"}
          setFullTimer={setFullTimer}

        />
        <Incrementer
          paused={paused}
          state={_break}
          setState={setBreak}
          title={"Break"}
          setFullTimer={setFullTimer}
        />
      </div>
      <div className="timer">
        <h2 id='timer-label'>{activeBreak ? 'Break Time!' : 'Focus Time!'}</h2>
        <h1 id="time-left">{formatTimer()}</h1>
        <div className="timer__butons">
          <button onClick={(e) => handleStartStop(e)} id="start_stop">
            {paused ? "Start" : "Pause"}
          </button>
          <button onClick={()=>reset()} id="reset">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
