// store.js
import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categorySlice';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    cart: cartReducer,
  },
});
