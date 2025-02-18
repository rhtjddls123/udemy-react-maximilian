import { ReactNode, useReducer } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";
import { CartContext, CartContextType } from "./CartContext";

interface CartContextProviderProps {
  children: ReactNode;
}

type ShoppingCartReducerActionType =
  | { type: "ADD-ITEM"; payload: { id: string } }
  | { type: "UPDATE-ITEM"; payload: { productId: string; amount: number } };

function shoppingCartReducer(state: ShoppingCartType, action: ShoppingCartReducerActionType) {
  const { type, payload } = action;

  if (type === "ADD-ITEM") {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex((cartItem) => cartItem.id === payload.id);
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find((product) => product.id === payload.id);
      if (product) {
        updatedItems.push({
          id: payload.id,
          name: product.title,
          price: product.price,
          quantity: 1
        });
      }
    }

    return {
      ...state,
      items: updatedItems
    };
  }

  if (type === "UPDATE-ITEM") {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex((item) => item.id === payload.productId);

    const updatedItem = {
      ...updatedItems[updatedItemIndex]
    };

    updatedItem.quantity += payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems
    };
  }

  return state;
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(shoppingCartReducer, { items: [] });

  function handleAddItemToCart(id: string) {
    shoppingCartDispatch({ type: "ADD-ITEM", payload: { id } });
  }

  function handleUpdateCartItemQuantity(productId: string, amount: number) {
    shoppingCartDispatch({ type: "UPDATE-ITEM", payload: { productId, amount } });
  }

  const cartValue: CartContextType = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateCartItemQuantity: handleUpdateCartItemQuantity
  };

  return <CartContext value={cartValue}>{children}</CartContext>;
};
