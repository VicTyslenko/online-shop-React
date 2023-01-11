import { Routes, Route } from 'react-router-dom';
import AddressBook from './containers/AddressBook/AddressBook';

function Profile() {
	return (
		<div>
			<Routes>
				<Route path="/address" element={<AddressBook />} />
			</Routes>
		</div>
	);
}

export default Profile;
