import { Routes, Route } from 'react-router-dom';
import AddressBook from './containers/AddressBook/AddressBook';
import LoginOverlayPage from '../components/Login_overlay/LoginOverlayPage/LoginOverlayPage';
function Profile() {
	return (
		<div>
			<Routes>
				<Route path='/login' element={<LoginOverlayPage />} />
			</Routes>
		</div>
	);
}

export default Profile;
