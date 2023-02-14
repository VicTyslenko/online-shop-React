import axiosInstance from "./axois";

export function getProductsList() {
	return axiosInstance.get('/products?perPage=10&startPage=1');
};

export function getProductById(itemNo) {
	return axiosInstance.get(`/products/${itemNo}`);
};
