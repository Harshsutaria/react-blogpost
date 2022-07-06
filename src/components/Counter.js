import { useState } from "react";
export const Counter = () => {
  let [count, setCount] = useState(0);

  //   incremental method to update the counter

  const handleClick = (count) => {
    setCount(count + 1);
  };

  return (
    <div className="Counter">
      <h1>Please click here!!!!!!</h1>
      <h3>{count}</h3>
      <button onClick={() => handleClick(count)}>counter</button>
    </div>
  );
};
