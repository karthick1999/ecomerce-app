// features/categoriesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [],
    currentCategory:'',
  };
  

const categoriesSlice = createSlice({
  name: 'categories',
 initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories=action.payload;
      console.log("state ",state,action.payload);

    },
  },
});

export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
