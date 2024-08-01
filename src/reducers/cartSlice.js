// features/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    cartList: [],
    currentitem: {},
    totalcount:0,


}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            console.log("action add ", action.payload);
            const existingItemIndex = state.cartList.findIndex(item => item.idMeal === action.payload);
            console.log("existingItemIndex ", existingItemIndex);
            const updatedCartList = state.cartList.map((item, index) =>
                index === existingItemIndex ? { ...item, count: 1 } : item
              
            );
            state.totalcount+=1;

            state.cartList = updatedCartList;

        },
        updateitem: (state, action) => {
            console.log("action update ", action.payload.id);
            const existingItemIndex = state.cartList.findIndex(item => item.idMeal === action.payload.id);
            console.log("item index ", existingItemIndex);
            state.totalcount+=action.payload.value;

            const updatedCartList = state.cartList.map((item, index) =>
                index === existingItemIndex ? { ...item, count: item.count + action.payload.value } : item
            );
            state.cartList = updatedCartList;
            console.log("updated cart List ", updatedCartList);

        },
        getitem: (state, action) => {
            let resultObj = state.cartList.filter((item) => item.idMeal === action.payload);
             state.currentitem=resultObj[0];
        },
        setItem: (state, action) => {
            state.cartList = action.payload;
        },
        updatecurrentitem:(state,action) =>{
           console.log("inside update current item ",action.payload); 
           console.log(state.currentitem[0]);
           state.totalcount+=action.payload;
            let resultObj=Object.assign(state.currentitem,{count: state.currentitem.count?state.currentitem.count+ action.payload:action.payload});
            console.log("update current item ",resultObj);
        },
    },
});

export const { addItem, updateitem, setItem ,getitem,updatecurrentitem} = cartSlice.actions;
export default cartSlice.reducer;
