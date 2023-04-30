import { createContext, useContext, useEffect, useState } from "react";
import ShoppingCardAdd from "../components/card/ShoppingCardAdd";

const ShoppingCard = createContext({});

const initialCartItems = localStorage.getItem("shopping-cart")
  ? JSON.parse(localStorage.getItem("shopping-cart"))
  : [];
const ShoppingCardProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setcartItems] = useState(initialCartItems);

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const openCart = () => {
    setIsOpen(true);
  };

  const CartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const closeCart = () => {
    setIsOpen(false);
  };

  const getItemsQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id) => {
    setcartItems((currItems) => {
      if (currItems.find((item) => item.id == id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (id) => {
    setcartItems((currItems) => {
      if (currItems.find((item) => item.id == id) == null) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeItemsFromCart = (id) => {
    setcartItems((currItems) => currItems.filter((item) => item.id !== id));
  };

  return (
    <ShoppingCard.Provider
      value={{
        cartItems,
        getItemsQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeItemsFromCart,
        openCart,
        closeCart,
        CartQuantity,
      }}
    >
      {children}
      <ShoppingCardAdd isOpen={isOpen} />
    </ShoppingCard.Provider>
  );
};

export default ShoppingCardProvider;

export const useShoppingCard = () => {
  return useContext(ShoppingCard);
};
