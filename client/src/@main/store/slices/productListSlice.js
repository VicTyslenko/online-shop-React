import { createSlice } from '@reduxjs/toolkit';

import { getProductList } from '../actions/productListActions';

const initialState = {
	data: [],
};

export const productListSlice = createSlice({
	name: 'productList',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getProductList.fulfilled, (state, action) => {
			state.data = [...action.payload]
		})
	}
  })

export default productListSlice.reducer;
