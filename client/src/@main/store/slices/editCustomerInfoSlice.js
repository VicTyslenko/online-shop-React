import { createSlice } from '@reduxjs/toolkit';

import { editInfoFetchData } from '../actions/editCustomerInfoAction';

const initialState = {
	data: null,
	status: 'loading',
	error: null,
};

const editInfoReducer = createSlice({
	name: 'editInfo',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(editInfoFetchData.pending, (state) => {
			state.status = 'loading';
			state.data = null;
		});
		builder.addCase(editInfoFetchData.fulfilled, (state, { payload }) => {
			state.status = 'loaded';
			state.data = { ...state.data, ...payload };
		});
		builder.addCase(editInfoFetchData.rejected, (state, { payload }) => {
			state.status = 'error';
			state.error = payload;
		});
	},
});

export default editInfoReducer.reducer;
