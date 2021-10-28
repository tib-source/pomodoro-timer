import React, {useState} from 'react'


function Timer() {
    const [timer, setTimer] = useState(25); 
    const [_break, setBreak] = useState(5)

    return (
        <div className='timer'>
            <div className="top">
                <div>
                    <span id='break-label'>Session Length</span>
                    <div className="button">
                        <button id="session-increment"></button>
                        <input type="number" name="break" id="session-length" />
                        <button id="session-decrement"></button>
                    </div>
                </div>
                <div>
                    <span id='break-label'>Break Length</span>
                    <div className="button">
                        <button id="break-increment"></button>
                        <input type="number" name="break" id="break-length" />
                        <button id="break-decrement"></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timer
