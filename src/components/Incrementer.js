import React from "react";

function Incrementer({ title, setTimer, timer }) {
  const lower = title.toLowerCase();

  const handleClick = (type) => {
    switch (type) {
      case -1:
        return setTimer(timer - 1);
      case 1:
        return setTimer(timer + 1);
      default:
        break;
    }
  };
  return (
    <div>
      <span id={`${lower}-label`}>Session Length</span>
      <div className="button">
        <button
          onClick={() => handleClick(1)}
          id={`${lower}-increment`}
        ></button>
        <input type="number" name="break" id={`${lower}-length`} />
        <button
          onClick={() => handleClick(-1)}
          id={`${lower}-decrement`}
        ></button>
      </div>
    </div>
  );
}

export default Incrementer;
