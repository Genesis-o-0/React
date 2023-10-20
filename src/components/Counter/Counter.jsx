import { useState } from "react";

export default function Counter() {
  let [number, setNumber] = useState(20);
  const increment = () => setNumber(++number);
  const decrement = () => {
    if (number > 0) {
      setNumber(--number);
    }
  };
  return (
    <div className="pt-5">
      <h1 className="text-center text-primary fw-bold ">{number}</h1>
      <div className="d-flex justify-content-center gap-5">
        <button className="btn btn-success mx-5" onClick={increment}>
          Increment
        </button>
        <button className="btn btn-danger mx-5" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}
