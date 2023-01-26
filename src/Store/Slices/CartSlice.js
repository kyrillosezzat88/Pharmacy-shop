import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  Cart: [],
  Total: 0,
};

const CartReducer = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      let checkPro = state.Cart.find((itm) => itm.id === action.payload.id);
      let Qty = action.payload.Qty ? action.payload.Qty : 1;
      if (checkPro) {
        checkPro.Qty += Qty;
        state.Total += Qty * checkPro.price;
      } else {
        state.Cart = [...state.Cart, { ...action.payload, Qty }];
        state.Total += action.payload.price * Qty;
      }
      toast(`${action.payload.name} Added To Cart`, { type: "success" });
    },
    RemoveFromCart: (state, action) => {
      state.Cart = state.Cart.filter((pro) => pro.id !== action.payload.id);
      state.Total -= action.payload.Qty * action.payload.price;
      toast(`${action.payload.name} Removed From Cart`, { type: "info" });
    },
    ChangeQty: (state, action) => {
      let getPro = state.Cart.find((itm) => itm.id === action.payload.id);
      getPro.Qty = action.payload.Qty;
      state.Total = state.Cart.map((pro) => pro.price * pro.Qty).reduce(
        (a, b) => a + b,
        0
      );
    },
    EmptyCart: (state, action) => {
      state.Cart = [];
      state.Total = 0;
    },
  },
  extraReducers: {},
});
export const { AddToCart, RemoveFromCart, ChangeQty, EmptyCart } =
  CartReducer.actions;
export default CartReducer.reducer;
