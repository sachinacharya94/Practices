import { useState } from "react";
import { MAX_LIMIT } from "../Constant/limit";

const Hook1 = () => {
  const [count, setCount] = useState(1);

  const handleIncrese = () => {
    if (count >= MAX_LIMIT) return;
    setCount(count + 1);
  };
  const handleDecrese = () => {
    if (count <= 1) return;
    setCount(count - 1);
  };

  return (
    <div>
      <div className="container">
        <h3 className="m-auto my-3 p-3">Hook</h3>
        <div>
          <button
            onClick={handleDecrese}
            className={
              count <= 1
                ? "btn btn-sm btn-primary p-3 m-2 fw-bold disabled"
                : "btn btn-sm btn-primary p-3 m-2 fw-bold"
            }
          >
            -
          </button>
          <span className="p-3 m-2">{count}</span>
          <button
            onClick={handleIncrese}
            className={
              MAX_LIMIT <= count
                ? "btn btn-sm btn-primary p-3 m-2 fw-bold disabled"
                : "btn btn-sm btn-primary p-3 m-2 fw-bold"
            }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hook1;
