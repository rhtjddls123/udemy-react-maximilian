import { use, useRef } from "react";

import CartModal, { HandleCartModal } from "./CartModal.jsx";
import { CartContext } from "../store/CartContext.js";
import ModalButton from "./ModalButton.js";

export default function Header() {
  const modal = useRef<HandleCartModal>(null);
  const { items } = use(CartContext);

  const cartQuantity = items.length;

  function handleOpenCartClick() {
    modal.current?.open();
  }

  let modalActions = <ModalButton>Close</ModalButton>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <ModalButton>Close</ModalButton>
        <ModalButton>Checkout</ModalButton>
      </>
    );
  }

  return (
    <>
      <CartModal ref={modal} title="Your Cart" actions={modalActions} />
      <header className="flex justify-between items-center py-12 px-[15%]">
        <div className="flex items-center">
          <img className="w-20 mr-6" src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button
            className="bg-[#edbf68] border-none rounded-md py-2 px-6 text-[#201e1a] text-xl cursor-pointer hover:bg-[#f5b744]"
            onClick={handleOpenCartClick}
          >
            Cart ({cartQuantity})
          </button>
        </p>
      </header>
    </>
  );
}
