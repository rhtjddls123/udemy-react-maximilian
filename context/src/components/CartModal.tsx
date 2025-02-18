import { JSX, Ref, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart";

interface CartModalProps {
  title: string;
  actions: JSX.Element;
  ref: Ref<HandleCartModal>;
}

export interface HandleCartModal {
  open: () => void;
}

const CartModal = ({ title, actions, ref }: CartModalProps) => {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current?.showModal();
      }
    };
  });

  const modalElement = document.getElementById("modal");

  if (!modalElement) return null;

  return createPortal(
    <dialog
      className="w-[30%] bg-[#d3b17b] border-none rounded-md shadow-lg animate-[fade-slide-in-from-top 0.3s ease-in-out] backdrop:bg-black/65"
      ref={dialog}
    >
      <h2 className="text-2xl text-[#4f3807] uppercase m-0">{title}</h2>
      <Cart />
      <form className="flex gap-4 justify-end items-center" method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    modalElement
  );
};

export default CartModal;
