import { createSlice } from '@reduxjs/toolkit';

import { getProduct } from '../actions/productActions';

const initialState = {
	data: {},
};

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getProduct.fulfilled, (state, action) => {
			state.data = { ...action.payload }
		})
	}
  })

export default productSlice.reducer;
