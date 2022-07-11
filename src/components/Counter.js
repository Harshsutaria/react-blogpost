import { useEffect, useState } from "react";
export const Counter = () => {
  let [count, setCount] = useState(0);
  let [name, setName] = useState("mango");

  //   incremental method to update the counter

  const handleClick = (count) => {
    setCount(count + 1);
    if (count > 5) setName("charsh");
  };

  // implementing use effect to check where we are wrong
  useEffect(() => {
    console.log("use Effectran!!!! woghotgkdm");
  }, [name]);

  return (
    <div className="Counter">
      <h1>{name}</h1>
      <h1>Please click here!!!!!!</h1>
      <h3>{count}</h3>
      <button onClick={() => handleClick(count)}>counter</button>
    </div>
  );
};
