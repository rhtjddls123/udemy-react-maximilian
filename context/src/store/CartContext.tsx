import { createContext } from "react";

export interface CartContextType extends ShoppingCartType {
  addItemToCart: (id: string) => void;
  updateCartItemQuantity: (productId: string, amount: number) => void;
}

export const CartContext = createContext<CartContextType>({
  items: [],
  addItemToCart: () => {},
  updateCartItemQuantity: () => {}
});
