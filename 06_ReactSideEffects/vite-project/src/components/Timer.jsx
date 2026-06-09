import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    //kod koji ce se izvrsiti
    const id = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    //clean up funkcija
    return () => {
      clearInterval(id);
    };
  }, []); //izvrsava se samo pri prvom renderiranju

  return <p>Elapsed: {seconds} seconds</p>;
}

export default Timer;
