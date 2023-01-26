import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EmptyCart } from "./CartSlice";
const initialState = {
  Orders: [],
  Total: 0,
  isLoading: false,
  error: null,
};

export const placeOrder = createAsyncThunk(
  "order/placeorder",
  async (_, thunkApi) => {
    const { rejectWithValue, getState, dispatch } = thunkApi;
    try {
      // call api to place new oprder
      let orders = getState().Cart.Cart;
      dispatch(EmptyCart());
      return orders;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: {
    [placeOrder.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [placeOrder.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.Orders = action.payload;
      state.Total = action.payload
        .map((pro) => pro.price * pro.Qty)
        .reduce((a, b) => a + b, 0);
    },
    [placeOrder.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { PlaceOrder } = orderSlice.actions;
export default orderSlice.reducer;
