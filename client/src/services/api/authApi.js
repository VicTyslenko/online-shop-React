import axiosInstance from './axios';

export function postAuthoriation(params) {
	return axiosInstance.post('/auth/login', params);
}
