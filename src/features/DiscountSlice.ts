/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DiscountProps } from '../components/Discount/types';
import DiscountService from '../services/DiscountService';

const initialState = {
  discounts: [] as (DiscountProps)[],
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
};

export const getDiscounts = createAsyncThunk(
  'discount/getDiscounts',
  async () => {
    try {
      const response = DiscountService.getAll();
      return response;
    } catch (e) {
      console.log('Error', e);
    }
  },
);

const discountSlice = createSlice({
  name: 'discount',
  initialState,
  reducers: {
    clearState: (state:{ isError: boolean, isSuccess: boolean, isFetching: boolean}) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDiscounts.fulfilled, (state, { payload }: { payload: any }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.discounts = payload;
    });
    builder.addCase(getDiscounts.rejected, (state, { payload }: { payload: any }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
    });
    builder.addCase(getDiscounts.pending, (state) => {
      state.isFetching = true;
    });
  },
});

export const { clearState } = discountSlice.actions;
export default discountSlice.reducer;
