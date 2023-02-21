import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { actionFetchData } from '../actions/authActions';

const initialState = {
	data: null,
	isLoading: true,
};

const authReducer = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(actionFetchData.pending, (state) => {
			state.isLoading = true;
			state.data = null;
		});
		builder.addCase(actionFetchData.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.data = payload;
		});
	},
});

export default authReducer.reducer;
