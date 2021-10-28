import React, {useState} from 'react'
import Incrementer from './Incrementer';

function Timer() {
    const [timer, setTimer] = useState(25); 
    const [_break, setBreak] = useState(5)

    return (
        <div className='timer'>
            <div className="top">
                <Incrementer state={timer} setState={setTimer} title={"Session"} />
                <Incrementer state={_break} setState={setBreak} title={"Break"} />
            </div>
        </div>
    )
}

export default Timer
