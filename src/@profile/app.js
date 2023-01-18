import { Routes, Route } from 'react-router-dom';
import AddressBook from './containers/AddressBook/AddressBook';
// eslint-disable-next-line no-unused-vars
import Menu from '../components/Menu/Menu';

function Profile() {
	return (
		<Routes>
			<Route path="/address" element={<AddressBook />} />
			<Route path="/menu" element={<Menu />} />
		</Routes>
	);
}

export default Profile;
