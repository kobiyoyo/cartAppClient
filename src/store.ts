import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/ProductSlice';
import cartsReducer from './features/CartSlice';
import discountsReducer from './features/DiscountSlice';

export const store = configureStore({
  reducer: {
    carts: cartsReducer,
    discounts: discountsReducer,
    products: productsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
