import axios from 'axios';

const API_URI = 'http://localhost:6000/api';

const instance = axios.create({
	baseURL: API_URI,
	timeout: 1000,
	withCredentials: false,
});

export default instance;
