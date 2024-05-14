import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../State/Slice/productSlice';
import usersReducer from './Slice/userSlice';

export const store = configureStore({
  reducer: {products: productReducer,users: usersReducer},
})

