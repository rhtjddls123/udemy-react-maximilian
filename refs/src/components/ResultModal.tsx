import { Ref, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

interface ResultModalProps {
  ref: Ref<HandleDialog>;
  targetTime: number;
  remainingTime: number;
  onReset: () => void;
}

export interface HandleDialog {
  open: () => void;
}

const ResultModal = ({ targetTime, remainingTime, onReset, ref }: ResultModalProps) => {
  const dialog = useRef<HTMLDialogElement>(null);

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current?.showModal();
      }
    };
  });

  const modalElement = document.getElementById("modal");

  if (!modalElement) return null;

  return createPortal(
    <dialog
      ref={dialog}
      className="border-none rounded-lg p-8 bg-[#d7fcf8] backdrop:bg-black backdrop:opacity-90"
      onClose={onReset}
    >
      {userLost && (
        <h2 className="font-[Handjet, monospace] m-0 mb-1 text-5xl uppercase">You lost</h2>
      )}
      {!userLost && (
        <h2 className="font-[Handjet, monospace] m-0 mb-1 text-5xl uppercase">
          Your Score: {score}
        </h2>
      )}
      <p className="mx-0 my-2 text-xl">
        The target time was <strong className="text-[#10655b]">{targetTime} seconds.</strong>
      </p>
      <p className="mx-0 my-2 text-xl">
        You stopped the timer with{" "}
        <strong className="text-[#10655b]">{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" className="text-right" onSubmit={onReset}>
        <button className="mt-4 py-2 px-4 border-none rounded bg-[#12352f] text-[#edfcfa] text-xl cursor-pointer hover:bg-[#051715]">
          Close
        </button>
      </form>
    </dialog>,
    modalElement
  );
};

export default ResultModal;
