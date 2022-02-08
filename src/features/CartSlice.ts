/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CartProps } from '../components/Cart/types';
import CartService from '../services/CartService';
import OrderItemService from '../services/OrderItemService';

const initialState = {
  cart: [] as (CartProps)[],
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
};

export const getCarts = createAsyncThunk(
  'cart/getCarts',
  async () => {
    try {
      const response = CartService.getAll();
      return response;
    } catch (e) {
      console.log('Error', e);
    }
  },
);
export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ product_id }: { product_id: number }, thunkApi) => {
    try {
      const response = OrderItemService.create({ product_id });
      return response;
    } catch (e) {
      console.log('Error', e);
      return thunkApi.rejectWithValue(e);
    }
  },
);

export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  async ({ id }: { id: number }, thunkApi) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = OrderItemService.delete(id);
      return id;
    } catch (e) {
      console.log('Error', e);
      return thunkApi.rejectWithValue(e);
    }
  },
);
export const updateCart = createAsyncThunk(
  'cart/updateCart',
  async ({ quantity, id }: { quantity: number ; id: number }, thunkApi) => {
    try {
      const response = OrderItemService.update({ quantity }, id);
      return response;
    } catch (e) {
      console.log('Error', e);
      return thunkApi.rejectWithValue(e);
    }
  },
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearState: (state:{ isError: boolean, isSuccess: boolean, isFetching: boolean}) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCarts.fulfilled, (state, { payload }: { payload: any }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.cart = payload;
    });
    builder.addCase(getCarts.rejected, (state, { payload }: { payload: any }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
    });
    builder.addCase(getCarts.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(addToCart.fulfilled, (state, { payload }: { payload: any }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.cart.push(payload);
    });
    builder.addCase(addToCart.rejected, (state, { payload }: { payload: any }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
    });
    builder.addCase(addToCart.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(removeFromCart.fulfilled, (state, { payload }: { payload: any }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.cart = state.cart.filter((item) => item.id !== payload);
    });
    builder.addCase(removeFromCart.rejected, (state, { payload }: { payload: any }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
    });
    builder.addCase(removeFromCart.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(updateCart.fulfilled, (state, { payload }: { payload: any }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.cart = state.cart.map((item) => {
        if (item.id !== payload.id) {
          return item;
        }
        return {
          ...item,
          ...payload,
        };
      });
    });
    builder.addCase(updateCart.rejected, (state, { payload }: { payload: any }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
    });
    builder.addCase(updateCart.pending, (state) => {
      state.isFetching = true;
    });
  },
});

export const { clearState } = cartSlice.actions;
export default cartSlice.reducer;
