// src/context/CartContext.tsx
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type CartItem = {
  name: string;
  price: number;
  img: string;
  count: number;
  priceCount: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: string) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  console.log(cartItems);
  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing) {
        return prev.map((i) =>
          i.name === item.name
            ? {
                ...i,
                count: i.count + 1,
                priceCount: parseFloat((i.priceCount + item.price).toFixed(2)),
              }
            : i
        );
      }
      return [...prev, { ...item, count: 1, priceCount: item.price }];
    });
  };

  const removeFromCart = (name: string) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.name === name) {
            const newCount = item.count - 1;
            const newPriceCount = item.priceCount - item.price;
            return newCount > 0
              ? {
                  ...item,
                  count: newCount,
                  priceCount: parseFloat(newPriceCount.toFixed(2)),
                }
              : null; // will be filtered out
          }
          return item;
        })
        .filter(Boolean) as CartItem[]; // remove nulls
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
