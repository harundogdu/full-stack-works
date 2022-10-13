import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const BASE_API_URL = 'https://northwind.vercel.app/api/products';

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  const { data } = await axios.get(BASE_API_URL);
  return data;
});

const initialState = {
  products: [],
  isLoading: false,
  isError: null
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    sayHello: state => {
      return state.name;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = 'Something wrong!';
    });
  }
});

export const { sayHello } = productSlice.actions;
export default productSlice.reducer;
