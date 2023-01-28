import { Routes, Route } from 'react-router-dom';

import ProductList from '../containers/ProductList';
import ProductPage from '../containers/ProductPage';

function MainRoutes() {
	return (
		<Routes>
			<Route
				path="/"
				// here should be HomePage and delete "*" at index.js in global routes
				element={<ProductPage />}
			/>
			<Route path="product/list" element={<ProductList />} />
			<Route path="product/:id" element={<ProductPage />} />
		</Routes>
	);
}

export default MainRoutes;
