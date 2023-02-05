import { Routes, Route } from 'react-router-dom';

import ProductList from '../containers/ProductList';
import ProductPage from '../containers/ProductPage';
import HomeLandingPage from '../containers/HomeLandingPage';
import ShoppingCart from '../containers/ShoppingCart';

import Login from '../containers/Login';
import Registration from '../containers/Registration';
import ContactLandingPage from '../containers/ContactLandingPage';
import HistoryBrandLandingPage from '../containers/HistoryBrandLandingPage';
import PaymentLandingPage from '../containers/PaymentLandingPage';
import PolicyLandingPage from '../containers/PolicyLandingPage';
import QuestionsLandingPage from '../containers/QuestionsLandingPage';
import WorkUsLandingPage from '../containers/WorkUsLandingPage';


function MainRoutes() {
	return (
		<Routes>
			<Route path="/" element={<HomeLandingPage />} />
			<Route path="/store/:category?/:product/" element={<ProductList />} />
			<Route path="/product/:id/" element={<ProductPage />} />
			<Route path="/shopping-cart" element={<ShoppingCart />} />
			<Route path="/login" element={<Login/>} />
			<Route path="/registration" element={<Registration />} />

			<Route path="/contact" element={<ContactLandingPage />} />
			<Route path="/history-brand" element={<HistoryBrandLandingPage />} />
			<Route path="/payment" element={<PaymentLandingPage />} />
			<Route path="/policy" element={<PolicyLandingPage />} />
			<Route path="/questions" element={<QuestionsLandingPage />} />
			<Route path="/work-us" element={<WorkUsLandingPage />} />

		</Routes>
	);
}

export default MainRoutes;
