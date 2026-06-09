import { useState, useEffect, useRef } from "react";

function RenderCounter() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div>
      <p>Count: {count}</p>
      <p>This component has rendered {renderCount.current} times</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default RenderCounter;
