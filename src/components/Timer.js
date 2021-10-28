import React, {useState, useEffect} from 'react'
import Incrementer from './Incrementer';

function Timer() {
    const [timer, setTimer] = useState(25)
    const [_break, setBreak] = useState(5)
    const [fullTimer, setFullTimer] = useState("25:00")

    let minutes = timer 
    let seconds = 0
    const [paused, setPaused] = useState(true)

    const formatTimer =()=>{
     return `${String(minutes.toString()).padStart(2,0)}:${String(seconds.toString()).padStart(2,0)}`
    }
    useEffect(() => {
        let timerId = null;
        if(!paused){
            timerId = setInterval(decrement, 1000)
        }else{
            if(fullTimer !== '25:00'){
                clearInterval()
            }
        }

        return () => clearInterval(timerId)

    }, [paused])
    const handleStartStop = (event) =>{
        if(paused){
            setPaused( false)
        } else if(!paused){ 
            setPaused(true)
        } 
    }

    const decrement=()=>{
        console.log(formatTimer())
        if(timer === 0 && seconds === 0){ handleStartStop()}
        if(seconds === 0){
            minutes--
            seconds = 59
        }else{
            seconds--
        }
        setFullTimer(formatTimer())
    }


    const resetTimer =()=>{}
    return (
        <div className='contianer'>
            <div className="top">
                <Incrementer paused={paused} state={timer} setState={setTimer} title={"Session"} />
                <Incrementer paused={paused} state={_break} setState={setBreak} title={"Break"} />
            </div>
            <div className="timer">
                <h1 id="time-left">{fullTimer}</h1>
                <div className="timer__butons">
                    <button onClick={(e)=>handleStartStop(e)} id="start_stop">{paused ? "Start": "Pause"}</button>
                    <button onClick={resetTimer} id="reset">Reset</button>
                </div>
            </div>
        </div>
    )
}

export default Timer
