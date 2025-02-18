import { useContext } from "react";
import { CartContext } from "../store/CartContext";

export default function Cart() {
  const { items, updateCartItemQuantity } = useContext(CartContext);
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div id="cart">
      {items.length === 0 && <p>No items in cart!</p>}
      {items.length > 0 && (
        <ul className="list-none my-4 mx-0 p-0 flex flex-col gap-2">
          {items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li
                className="flex justify-between items-center py-2 px-4 bg-[#fbd392] rounded-md text-[0.9rem]"
                key={item.id}
              >
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="text-base flex gap-2 items-center">
                  <button
                    className="bg-transparent border-none rounded-md text-[#201e1a] cursor-pointer text-[1.1rem] hover:bg-[#f5b744] first-of-type:pb-[0.2rem]"
                    onClick={() => updateCartItemQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="bg-transparent border-none rounded-md text-[#201e1a] cursor-pointer text-[1.1rem]  hover:bg-[#f5b744] first-of-type:pb-[0.2rem]"
                    onClick={() => updateCartItemQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p className="text-right">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
