import './App.css';
import LoginPage from './@editor/containers/LoginPage/LoginPage';
import DashboardPage from './@editor/containers/DashboardPage/DashboardPage';
import { Route, Routes } from 'react-router-dom';
function App() {
	return <div>
		<Routes>
			<Route path='/admin' element={<LoginPage />} />
			<Route path='/dashboard' element={<DashboardPage />} />
		</Routes>

	</div>;
}

export default App;
