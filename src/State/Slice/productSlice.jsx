import { createSlice } from '@reduxjs/toolkit'

const initialState = [{
  id:1, name: "phone" , price : 2000
}]

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state,action) => {
      let newProduct = action.payload;
      state.products.push(newProduct);
    },
    
    
  },
})


export const { increment, decrement, incrementByAmount } = productSlice.actions

const productReducer = productSlice.reducer;
export default productReducer;