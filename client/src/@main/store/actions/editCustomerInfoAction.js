import { createAsyncThunk } from '@reduxjs/toolkit';

import axiosInstance from '../../../services/api/axios';

export const editInfoFetchData = createAsyncThunk(
	'editInfo/editInfoFetchData',
	async (params, { rejectWithValue, getState }) => {
		const { auth } = getState();
		try {
			const { data } = await axiosInstance.put('/customers',params, {
				headers: {
					Authorization: auth.data?.token,
				},
			});
			return data;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	},
);
