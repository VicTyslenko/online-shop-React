import axiosInstance from "./axios";

export function getProductsList(startPage, perPage) {
	return axiosInstance.get('/products/filter', {
		params: {
			startPage,
			perPage
		}
	});
};

export function getProductById(itemNo) {
	return axiosInstance.get(`/products/${itemNo}`);
};
