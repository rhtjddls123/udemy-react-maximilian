import { useEffect, useState } from "react";

interface ProgressBarProps {
  timer: number;
}

const ProgressBar = ({ timer }: ProgressBarProps) => {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("INTERVAL");
      setRemainingTime((prevTimer) => prevTimer - 10);
    }, 10);

    return () => {
      console.log("Cleaning up interval");
      clearInterval(interval);
    };
  }, []);
  return <progress value={remainingTime} max={timer} />;
};

export default ProgressBar;
