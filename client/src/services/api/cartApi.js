import axiosInstance from "./axios";

export function getCart(config) {
	return axiosInstance.get('cart', config);
};

export function addProductToCart(id, config) {
	return axiosInstance.put(`cart/${id}`, null, config);
};

export function deleteProductFromCart(id, config) {
	return axiosInstance.delete(`cart/${id}`, config);
};
