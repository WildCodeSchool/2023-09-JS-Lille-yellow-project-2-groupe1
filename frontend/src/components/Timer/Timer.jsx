import { useEffect } from "react";
import { useGlobalContext } from "../Context/GlobalContextProvider";
import "./Timer.scss";

function Timer() {
  const { time, setTime } = useGlobalContext();
  useEffect(() => {
    let timer;
    if (time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [time]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return <span className="timer">{formatTime(time)}</span>;
}

export default Timer;
