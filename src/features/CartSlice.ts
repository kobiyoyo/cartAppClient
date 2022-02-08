/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CartProps } from '../components/Cart/types';
import CartService from '../services/CartService';

const initialState = {
  carts: [] as (CartProps)[],
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
      state.carts = payload;
    });
    builder.addCase(getCarts.rejected, (state, { payload }: { payload: any }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
    });
    builder.addCase(getCarts.pending, (state) => {
      state.isFetching = true;
    });
  },
});

export const { clearState } = cartSlice.actions;
export default cartSlice.reducer;
