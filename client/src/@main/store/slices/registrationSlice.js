import { createSlice } from '@reduxjs/toolkit';

import { registerFetchData } from '../actions/registrationActions';

const initialState = {
	data: null,
	status: 'loading',
};

const registrationReducer = createSlice({
	name: 'registration',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(registerFetchData.pending, (state) => {
			state.status = 'loading';
			state.data = null;
		});
		builder.addCase(registerFetchData.fulfilled, (state, { payload }) => {
			state.status = 'leaded';
			state.data = payload;
		});
		builder.addCase(registerFetchData.rejected, (state) => {
			state.status = 'error';
			state.data = null;
		});
	},
});

export default registrationReducer.reducer;
