import React from "react";

function Incrementer({ handleIncrement, paused, title, setState, state }) {
  const lower = title.toLowerCase();

  return (
    <div className="laboom">
      <span id={`${lower}-label`}>{title} Length</span>
      <div className="button">
        <button
          onClick={() => handleIncrement(-60, title)}
          id={`${lower}-decrement`}
        >
          -
        </button>
        <input
          type="number"
          value={state}
          name="break"
          id={`${lower}-length`}
          readOnly
        />
        <button
          onClick={() => handleIncrement(60, title)}
          id={`${lower}-increment`}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Incrementer;
