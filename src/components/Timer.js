import React, {useState} from 'react'
import Incrementer from './Incrementer';

function Timer() {
    const [timer, setTimer] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [_break, setBreak] = useState(5);
    const [paused, setPaused] = useState(false)

    const formatTimer =()=>{
     return `${String(timer.toString()).padStart(2,0)} :
    ${String(seconds.toString()).padStart(2,0)}`
    }
    return (
        <div className='contianer'>
            <div className="top">
                <Incrementer state={timer} setState={setTimer} title={"Session"} />
                <Incrementer state={_break} setState={setBreak} title={"Break"} />
            </div>
            <div className="timer">
                <h1 id="time-left">{formatTimer()}</h1>
            </div>
        </div>
    )
}

export default Timer
