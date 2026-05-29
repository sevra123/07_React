import { useState } from "react";

function Counter() {
  // let count = 0;
  const [count, setCount] = useState(0);

  function handleClick() {
    //count = count + 1;
    //console.log("Count: ", count);
    setCount(count + 1);
  }

  return (
    <div>
      <p> Count: {count}</p>
      <button type="button" onClick={handleClick}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
