import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ButtonsToAddItemsinCart from "./ButtonsToAddItemsinCart";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/Store";
import { removeFromCart } from "../features/StoreSlice";

const Cart_For_Product_Details = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart);

  function toggleCart() {
    setIsCartOpen((prev) => !prev);
  }

  return (
    <>
      <button
        className="fixed top-4 right-4 z-50 flex items-center gap-1"
        onClick={toggleCart}
      >
        <FaShoppingCart className="size-8 sm:text-2xl text-gray-800 cursor-pointer" />
        <sup
          className={`rounded-full w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-xs font-bold
            ${
              cartItems.length > 0
                ? "bg-gray-500 text-red-600 animate-pulse"
                : "bg-gray-500 text-black"
            }`}
        >
          {cartItems.length}
        </sup>
      </button>

      {isCartOpen && (
        <div className="fixed top-16 right-3 sm:right-6 w-[90%] max-w-[320px] sm:max-w-sm h-[75vh] overflow-y-auto bg-white shadow-lg rounded-lg z-40 p-4">
          <h2 className="text-lg font-semibold mb-4 border-b pb-2">Cart</h2>

          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-sm">Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start justify-between gap-3 mb-4 pb-3 border-b"
              >
                <div className="flex gap-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-14 h-14 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="text-sm font-semibold">{item.name}</h3>
                    <p className="text-green-600 text-sm font-medium">
                      ${item.price.toFixed(2)}
                    </p>
                    <ButtonsToAddItemsinCart
                      item={{
                        img: item.img,
                        name: item.name,
                        price: item.price,
                      }}
                      count={item.count}
                      priceCount={item.priceCount}
                    />
                  </div>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.name))}
                  className="text-red-500 hover:text-red-700 text-xs mt-1"
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
