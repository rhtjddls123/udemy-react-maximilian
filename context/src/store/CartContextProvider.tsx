import { ReactNode, useState } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";
import { CartContext, CartContextType } from "./CartContext";

interface CartContextProviderProps {
  children: ReactNode;
}
export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartType>({
    items: []
  });

  function handleAddItemToCart(id: string) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];

      const existingCartItemIndex = updatedItems.findIndex((cartItem) => cartItem.id === id);
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === id);
        if (product) {
          updatedItems.push({
            id: id,
            name: product.title,
            price: product.price,
            quantity: 1
          });
        }
      }

      return {
        items: updatedItems
      };
    });
  }

  function handleUpdateCartItemQuantity(productId: string, amount: number) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex((item) => item.id === productId);

      const updatedItem = {
        ...updatedItems[updatedItemIndex]
      };

      updatedItem.quantity += amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems
      };
    });
  }

  const cartValue: CartContextType = {
    items: shoppingCart.items,
    addItemToCart: handleAddItemToCart,
    updateCartItemQuantity: handleUpdateCartItemQuantity
  };

  return <CartContext value={cartValue}>{children}</CartContext>;
};
