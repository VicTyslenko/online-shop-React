import axiosInstance from './axios';

export function postAuthoriation(params) {
	return axiosInstance.post('/customers/login', params);
}
