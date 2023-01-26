import { configureStore } from "@reduxjs/toolkit";
import Cart from "./Slices/CartSlice";
import Products from "./Slices/ProductsSlice";
import Order from "./Slices/OrderSlice";
export default configureStore({
  reducer: { Cart, Products, Order },
});
