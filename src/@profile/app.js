import { Routes, Route } from 'react-router-dom';
// import LoginOverlayPage from '../components/Login_overlay/LoginOverlayPage/LoginOverlayPage';
import UserRegistration from '../components/UserRegistration/UserRegistration';

function Profile() {
	return (
		<div>
			<Routes>
				{/* <Route path="/login" element={<LoginOverlayPage />} /> */}
				<Route path="/registration" element={<UserRegistration />} />
			</Routes>
		</div>
	);
}

export default Profile;
