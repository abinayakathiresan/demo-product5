import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../State/Slice/productSlice';

export const store = configureStore({
  reducer: {products: productReducer,},
})

