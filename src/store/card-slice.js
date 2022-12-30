import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!itemInCart) {
        state.items.push({ ...action.payload, quantity: 1 });
        state.totalAmount++;
      }
    },
    incrementQuantity: (state, action) => {
      const itemInCart = state.items.find((item) => item.id === action.payload);
      itemInCart.quantity++;
      state.totalAmount++;
    },
    decrementQuantity: (state, action) => {
      const itemInCart = state.items.find((item) => item.id === action.payload);
      state.totalAmount--;
      if (itemInCart.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        itemInCart.quantity--;
      }
    },
    removeItem: (state, action) => {
      const itemInCart = state.items.find((item) => item.id === action.payload);
      state.totalAmount -= itemInCart.quantity;
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
