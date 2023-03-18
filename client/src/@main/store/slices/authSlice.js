import { createSlice } from '@reduxjs/toolkit';
import jwt_decode from 'jwt-decode';
import { actionFetchAuth } from '../actions/authActions';
import { editInfoFetchData } from '../actions/editCustomerInfoAction';
const initialState = {
	data: null,
	status: 'loading',
	error: null,
};

const authReducer = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		clearDataAuth(state) {
			state.data = null;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(actionFetchAuth.pending, (state) => {
			state.status = 'loading';
			state.data = null;
		});
		builder.addCase(actionFetchAuth.fulfilled, (state, action) => {
			state.status = 'loaded';
			// state.data = { ...action.payload, ...jwt_decode(action.payload.token) };
			state.data = action.payload;
		});

		builder.addCase(actionFetchAuth.rejected, (state, { payload }) => {
			state.status = 'error';
			state.error = payload;
		});
	},
});

export const { clearDataAuth } = authReducer.actions;
export default authReducer.reducer;
