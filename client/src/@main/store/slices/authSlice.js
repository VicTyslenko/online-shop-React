import { createSlice } from '@reduxjs/toolkit';

import { actionFetchAuth } from '../actions/authActions';

const initialState = {
	data: null,
	status: 'loading',
	error: null,
};

const authReducer = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(actionFetchAuth.pending, (state) => {
			state.status = 'loading';
			state.data = null;
		});
		builder.addCase(actionFetchAuth.fulfilled, (state, { payload }) => {
			state.status = 'leaded';
			state.data = payload;
		});
		builder.addCase(actionFetchAuth.rejected, (state, { payload }) => {
			state.status = 'error';
			state.error = payload;
		});
	},
});

export default authReducer.reducer;
