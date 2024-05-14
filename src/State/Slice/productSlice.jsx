import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products : [{
    id:1, name: "phone" , price : 2000
  }]
} 

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state,action) => {
      let newProduct = action.payload;
      state.products.push(newProduct);
    },
    editProduct: (state, action) => {
      state.products = state.products.map((item)=> {
        return item.id == action.payload.id ? action.payload : item;
      })
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter((item)=> {
          return item.id != action.payload;
      })
    }
  },
})


export const { addProduct, editProduct,deleteProduct } = productSlice.actions

const productReducer = productSlice.reducer;
export default productReducer;