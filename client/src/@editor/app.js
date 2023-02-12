import { Routes, Route } from 'react-router-dom';
import LoginPage from './containers/LoginPage';
import AdminDashboard from './containers/AdminDashboard';

function Editor() {
	return (
		<Routes>
			<Route path="/admin" element={<LoginPage />} />
			<Route path="/dashboard/*" element={<AdminDashboard />} />
		</Routes>
	);
}

export default Editor;
