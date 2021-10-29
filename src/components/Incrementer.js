import React from "react";

function Incrementer({ update, paused, title, setState, state }) {
  const lower = title.toLowerCase();

  const handleIncrement = (type) => {
    if (paused) {
      switch (type) {
        case -1:
          setState((prev) => {
            if (prev - 1 <= 0) {
              return 1;
            }
            return prev - 1;
          });
          break;
        case 1:
          setState(state + 1);
          break;
        default:
          break;
      }
    }
  };
  return (
    <div>
      <span id={`${lower}-label`}>{title} Length</span>
      <div className="button">
        <button onClick={() => handleIncrement(-1)} id={`${lower}-increment`}>
          -
        </button>
        <input
          type="number"
          value={state}
          name="break"
          id={`${lower}-length`}
          readOnly
        />
        <button onClick={() => handleIncrement(1)} id={`${lower}-decrement`}>
          +
        </button>
      </div>
    </div>
  );
}

export default Incrementer;
