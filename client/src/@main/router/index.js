import { Routes, Route } from 'react-router-dom';

import ProductList from '../containers/ProductList';
import ProductPage from '../containers/ProductPage';
import HomeLandingPage from '../containers/HomeLandingPage';
import ShoppingCart from '../containers/ShoppingCart';
import LoginForm from '../containers/LoginForm/LoginForm';
import LandingPageLogin from '../containers/LandingPageLogin/LandingPageLogin '

import ContactLandingPage from '../containers/ContactLandingPage';
import HistoryBrandLandingPage from '../containers/HistoryBrandLandingPage';
import PaymentLandingPage from '../containers/PaymentLandingPage';
import PolicyLandingPage from '../containers/PolicyLandingPage';
import QuestionsLandingPage from '../containers/QuestionsLandingPage';
import WorkUsLandingPage from '../containers/WorkUsLandingPage';
import EmptyCart from '../containers/ShoppingCart/EmptyCart/EmptyCart'
function MainRoutes() {
	return (
		<Routes>
			<Route path="/" element={<HomeLandingPage />} />
			<Route path="/store/:category" element={<ProductList />} />
			<Route path="/product/:id" element={<ProductPage />} />
			<Route path="/shopping-cart" element={<ShoppingCart />} />
			<Route path="/login-form" element={<LoginForm />} />
			<Route path="/login" element={<LandingPageLogin />} />
			<Route path="/empty-cart" element={<EmptyCart />} />
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
