import { Routes, Route } from 'react-router-dom';
import AddressBook from './containers/AddressBook/AddressBook';

function Profile() {
	return (
		<Routes>
			<Route path="/address" element={<AddressBook />} />
		</Routes>
	);
}

export default Profile;
