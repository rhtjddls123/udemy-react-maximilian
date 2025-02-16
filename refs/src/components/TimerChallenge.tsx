import { useRef, useState } from "react";
import ResultModal, { HandleDialog } from "./ResultModal";

interface TimerChallengeProps {
  title: string;
  targetTime: number;
}

const TimerChallenge = ({ title, targetTime }: TimerChallengeProps) => {
  const timer = useRef<number>(null);
  const dialog = useRef<HandleDialog>(null);

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0 && timer.current) {
    clearInterval(timer.current);
    dialog.current?.open();
  }

  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
  };

  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 10);
    }, 10);
  };

  const handleStop = () => {
    if (timer.current) clearInterval(timer.current);
    dialog.current?.open();
  };

  return (
    <>
      <ResultModal
        ref={dialog}
        remainingTime={timeRemaining}
        onReset={handleReset}
        targetTime={targetTime}
      />
      <section
        className="flex flex-col items-center justify-center p-8 mx-auto my-8 rounded-md shadow-md w-80 text-[#221c18]"
        style={{ background: "linear-gradient(#4df8df, #4df0f8)" }}
      >
        <h2 className="text-2xl tracking-widest m-0 text-center uppercase text-[#221c18]">
          {title}
        </h2>
        <p className="border border-solid border-[#46cebe] rounded py-1 px-2 m-2">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button
            className="mt-4 py-2 px-4 border-none rounded bg-[#12352f] text-[#edfcfa] text-xl cursor-pointer hover:bg-[#051715]"
            onClick={timerActive ? handleStop : handleStart}
          >
            {timerActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p style={timerActive ? { animation: "flash 1s infinite" } : {}}>
          {timerActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
