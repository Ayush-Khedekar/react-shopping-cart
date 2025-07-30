import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../Hooks/CartContext";

const Cart_For_Product_Details = () => {
  const { cartItems, removeFromCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  function toggleCart() {
    setIsCartOpen((prev) => !prev);
  }

  return (
    <>
      <button className="fixed top-4 right-4 z-50 flex" onClick={toggleCart}>
        <FaShoppingCart className="cursor-pointer size-8 sm:text-2xl text-gray-800" />
        <sup
          className={
            cartItems.length > 0
              ? "bg-gray-500 rounded-full w-10 h-10 flex items-center justify-center text-[1.5rem] text-red-600 font-medium animate-pulse"
              : "bg-gray-500 rounded-full w-10 h-10 flex items-center justify-center text-[1.5rem] text-black font-medium"
          }
        >
          {cartItems.length}
        </sup>
      </button>

      {isCartOpen && (
        <div className="fixed top-16 right-3 w-[90%] max-w-[320px] sm:right-6 sm:max-w-sm h-[75vh] overflow-y-auto bg-white shadow-md rounded-lg z-40 p-4">
          <h2 className="text-lg font-semibold mb-3">Cart</h2>

          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-sm">Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between mb-3 border-b pb-2"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="text-green-600 text-sm">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.name)}
                  className="text-red-500 hover:text-red-700 text-xs"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </>
  );
};

export default Cart_For_Product_Details;
