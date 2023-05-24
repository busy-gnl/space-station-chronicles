import React, { useState, useEffect } from "react";

function Timer() {
  const datePutIntoOrbit = new Date("1998-11-20T06:20:00Z");
  const [elapsedTime, setElapsedTime] = useState("");

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const now = new Date();
      const differenceInMs = now - datePutIntoOrbit;

      const secondes = Math.floor(differenceInMs / 1000) % 60;
      const minutes = Math.floor(differenceInMs / 1000 / 60) % 60;
      const hours = Math.floor(differenceInMs / 1000 / 60 / 60) % 24;
      const days = Math.floor(differenceInMs / 1000 / 60 / 60 / 24) % 12;
      const months = Math.floor(differenceInMs / 1000 / 60 / 60 / 24 / 30) % 12;
      const years = Math.floor(differenceInMs / 1000 / 60 / 60 / 24 / 365);

      setElapsedTime(
        `${years} ans ${months} mois ${days} j, ${hours} h, ${minutes} min, ${secondes} sec`
      );
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return <div className="timer-iss">{elapsedTime}</div>;
}

export default Timer;
