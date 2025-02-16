import { Ref, useImperativeHandle, useRef } from "react";

interface ResultModalProps {
  ref: Ref<HandleDialog>;
  result: string;
  targetTime: number;
}

export interface HandleDialog {
  open: () => void;
}

const ResultModal = ({ result, targetTime, ref }: ResultModalProps) => {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current?.showModal();
      }
    };
  });

  return (
    <dialog
      ref={dialog}
      className="border-none rounded-lg p-8 bg-[#d7fcf8] backdrop:bg-black backdrop:opacity-90"
    >
      <h2 className="font-[Handjet, monospace] m-0 mb-1 text-5xl uppercase">You {result}</h2>
      <p className="mx-0 my-2 text-xl">
        The target time was <strong className="text-[#10655b]">{targetTime} seconds.</strong>
      </p>
      <p className="mx-0 my-2 text-xl">
        You stopped the timer with <strong className="text-[#10655b]">X seconds left.</strong>
      </p>
      <form method="dialog" className="text-right">
        <button className="mt-4 py-2 px-4 border-none rounded bg-[#12352f] text-[#edfcfa] text-xl cursor-pointer hover:bg-[#051715]">
          Close
        </button>
      </form>
    </dialog>
  );
};

export default ResultModal;
