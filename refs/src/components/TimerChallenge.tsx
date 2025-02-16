import { useRef, useState } from "react";
import ResultModal, { HandleDialog } from "./ResultModal";

interface TimerChallengeProps {
  title: string;
  targetTime: number;
}

const TimerChallenge = ({ title, targetTime }: TimerChallengeProps) => {
  const timer = useRef<number>(null);
  const dialog = useRef<HandleDialog>(null);

  const [timerStarted, setTimerStarted] = useState(false);

  const handleStart = () => {
    timer.current = setTimeout(() => {
      dialog.current?.open();
    }, targetTime * 1000);
    setTimerStarted(true);
  };

  const handleStop = () => {
    if (timer.current) clearTimeout(timer.current);
    setTimerStarted(false);
  };

  return (
    <>
      <ResultModal ref={dialog} result="lost" targetTime={targetTime} />
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
            onClick={timerStarted ? handleStop : handleStart}
          >
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p style={timerStarted ? { animation: "flash 1s infinite" } : {}}>
          {timerStarted ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
