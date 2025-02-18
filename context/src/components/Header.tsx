import { useRef } from "react";

import CartModal, { HandleCartModal } from "./CartModal.jsx";

interface HeaderProps {
  cart: ShoppingCartType;
  onUpdateCartItemQuantity: (productId: string, amount: number) => void;
}

export default function Header({ cart, onUpdateCartItemQuantity }: HeaderProps) {
  const modal = useRef<HandleCartModal>(null);

  const cartQuantity = cart.items.length;

  function handleOpenCartClick() {
    modal.current?.open();
  }

  let modalActions = (
    <button className="bg-transparent border-none rounded-md text-[#201e1a] cursor-pointer text-[1.1rem] hover:text-[#453719] last-of-type:bg-[#271e07] last-of-type:border-none last-of-type:rounded-md last-of-type:py-2 last-of-type:px-4 last-of-type:text-[#f9efda] last-of-type:text-base last-of-type:cursor-pointer last-of-type:hover:bg-[#382e1b]">
      Close
    </button>
  );

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal
        ref={modal}
        cartItems={cart.items}
        onUpdateCartItemQuantity={onUpdateCartItemQuantity}
        title="Your Cart"
        actions={modalActions}
      />
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
