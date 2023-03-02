import { createSlice } from '@reduxjs/toolkit';

import { actionFetchAuth } from '../actions/authActions';

const initialState = {
	data: null,
	status: 'loading',
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
		builder.addCase(actionFetchAuth.rejected, (state) => {
			state.status = 'error';
			state.data = null;
		});
	},
});

export default authReducer.reducer;
