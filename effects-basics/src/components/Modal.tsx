import { ReactNode, Ref, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  ref?: Ref<HandleModal>;
  children: ReactNode;
}

export interface HandleModal {
  open: () => void;
  close: () => void;
}

const Modal = ({ ref, children }: ModalProps) => {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current?.showModal();
      },
      close: () => {
        dialog.current?.close();
      }
    };
  });

  const modalElement = document.getElementById("modal");

  if (!modalElement) return null;

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {children}
    </dialog>,
    modalElement
  );
};

export default Modal;
