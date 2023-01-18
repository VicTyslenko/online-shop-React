import { Routes, Route } from 'react-router-dom';
import UserRegistration from '../components/UserRegistration/UserRegistration';

function Profile() {
	return (
		<Routes>
			<Route path="/registration" element={<UserRegistration />} />
		</Routes>
	);
}

export default Profile;
