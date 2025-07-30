import { Outlet } from "react-router";
import NavBar from "./components/NavBar";
import { useState } from "react";

export type CartItem = {
  name: string;
  price: number;
  img: string;
};

const App = () => {
  const [cartItems, setCartItem] = useState<CartItem[]>([]);

  function addToCart(item: CartItem) {
    setCartItem((prev) => [...prev, item]);
  }

  function removeFromCart(item: CartItem) {
    setCartItem((prev) => [...prev, item]);
  }

  console.log("Cart updated:", cartItems);
  return (
    <div className="relative overflow-x-hidden">
      <NavBar />
      <Outlet context={{ cartItems, addToCart, removeFromCart }} />
    </div>
  );
};

export default App;
