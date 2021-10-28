import React from "react";

function Incrementer({ paused, title, setState, state }) {
  const lower = title.toLowerCase();

  const handleClick = (type) => {
    if(!paused){
        switch (type) {
            case -1:
            return setState(state - 1);
            case 1:
            return setState(state + 1);
            default:
            break;
        }
    }
  };
  return (
    <div>
      <span id={`${lower}-label`}>{title} Length</span>
      <div className="button">
        <button
          onClick={() => handleClick(-1)}
          id={`${lower}-increment`}
        ></button>
        <input type="number" defaultValue={state} name="break" id={`${lower}-length`} />
        <button
          onClick={() => handleClick(1)}
          id={`${lower}-decrement`}
        ></button>
      </div>
    </div>
  );
}

export default Incrementer;
