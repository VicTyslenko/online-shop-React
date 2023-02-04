import { Routes, Route } from 'react-router-dom';

import LoginPage from "../containers/LoginPage";
import DashboardPage from "../containers/DashboardPage";
import EditProducts from "../containers/EditProducts";
import EditShop from "../containers/EditShop";
import EditUsers from "../containers/EditUsers";
import EditStyleShop from "../containers/EditStyleShop";
import EditOrders from "../containers/EditOrders";


function EditorRoutes() {
	return (
		<Routes>
			<Route path="/admin/" element={<LoginPage />} />
			<Route path="/dashboard/" element={<DashboardPage />} />
			<Route path="/products/" element={<EditProducts />} />
			<Route path="/shop/" element={<EditShop />} />
			<Route path="/users/" element={<EditUsers />} />
			<Route path="/style-shop/" element={<EditStyleShop />} />
			<Route path="/orders/" element={<EditOrders />} />
		</Routes>
	);
}

export default EditorRoutes;
