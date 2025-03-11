import { createSlice } from '@reduxjs/toolkit';

import { data } from '../src/data';

const initialState = {
    products: data,
    quantity:0,
    total: 0
}

const shoppingSlice = createSlice({
    name:'shopping',
    initialState,
    reducers:{
        increaseQuantity: (state, {payload}) => {
            const item:any = state.products.find(item=>item.name===payload.name)
            item.quantity++
          },
          decreaseQuantity: (state, {payload}) => {
            const item:any = state.products.find(item=>item.name===payload.name)
            if(item.quantity>0) item.quantity--
          },
          removeItem:(state, {payload}) =>{
            state.products = state.products.filter(item=>item.name!==payload.name)
          },
          updateTotal:(state) => {
            state.total = state.products.reduce((total, product)=>total+product.price*product.quantity, 0)
            state.quantity = state.products.reduce((total, product)=>total+product.quantity, 0)
          }
    }
})
export const { increaseQuantity, decreaseQuantity, removeItem, updateTotal} = shoppingSlice.actions;
export default shoppingSlice.reducer;