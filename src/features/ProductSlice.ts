/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProductProps } from '../components/Product/types';
import ProductService from '../services/ProductService';

const initialState = {
  products: [] as (ProductProps & { discount_id: number })[],
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
};

export const addProduct = createAsyncThunk(
  'product/addProduct',
  async (body, thunkApi) => {
    try {
      const response = ProductService.create(body);
      return response;
    } catch (e) {
      console.log('Error', e);
      return thunkApi.rejectWithValue(e);
    }
  },
);

export const getProducts = createAsyncThunk(
  'product/getProducts',
  async () => {
    try {
      const response = ProductService.getAll();
      return response;
    } catch (e) {
      console.log('Error', e);
    }
  },
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    clearState: (state:{ isError: boolean, isSuccess: boolean, isFetching: boolean}) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addProduct.fulfilled, (state, { payload }: { payload: any }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.products.push(payload);
    });
    builder.addCase(addProduct.rejected, (state, { payload }: { payload: any }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
    });
    builder.addCase(addProduct.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(getProducts.fulfilled, (state, { payload }: { payload: any }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.products = payload;
    });
    builder.addCase(getProducts.rejected, (state, { payload }: { payload: any }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
    });
    builder.addCase(getProducts.pending, (state) => {
      state.isFetching = true;
    });
  },
});

export const { clearState } = productSlice.actions;
export default productSlice.reducer;
