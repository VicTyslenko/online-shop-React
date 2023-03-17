import { createAsyncThunk } from '@reduxjs/toolkit';

import axiosInstance from '../../../services/api/axios';

export const editInfoFetchData = createAsyncThunk('editInfo/editInfoFetchData', async (params, { rejectWithValue }) => {
	try {
		const { data } = await axiosInstance.put('/customers/');
		return data;
	} catch (err) {
		return rejectWithValue(err.response.data);
	}
});
