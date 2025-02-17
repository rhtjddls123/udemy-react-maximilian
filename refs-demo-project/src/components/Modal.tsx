import { ReactNode, Ref, useImperativeHandle, useRef } from "react";
import Button from "./Button";
import { createPortal } from "react-dom";

interface ModalProps {
  buttonCaption: string;
  ref: Ref<HandleDialog>;
  children: ReactNode;
}

export interface HandleDialog {
  open: () => void;
}

const Modal = ({ buttonCaption, ref, children }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current?.showModal();
      }
    };
  });

  const modalElement = document.getElementById("modal-root");

  if (!modalElement) return null;

  return createPortal(
    <dialog ref={dialogRef} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    modalElement
  );
};

export default Modal;
