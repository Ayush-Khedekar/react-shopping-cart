import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem } from "../App";

type cartState = {
  cart: CartItem[];
};

const initialState: cartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const existing = state.cart.find((i) => i.name === item.name);

      if (existing) {
        existing.count += 1;
        existing.priceCount = parseFloat(
          (existing.priceCount + item.price).toFixed(2)
        );
      } else {
        state.cart.push({ ...item, count: 1, priceCount: item.price });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const index = state.cart.findIndex(
        (item) => item.name === action.payload
      );
      if (index !== -1) {
        if (state.cart[index].count > 1) {
          state.cart[index].count -= 1;
          state.cart[index].priceCount = parseFloat(
            (state.cart[index].priceCount - state.cart[index].price).toFixed(2)
          );
        } else {
          state.cart.splice(index, 1);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
