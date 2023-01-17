<<<<<<< HEAD
import { Routes, Route } from "react-router";
import UserProfile from "./containers/UserProfile/UserProfile";
function Profile() {
	return <div>
		<Routes>
			<Route path="/user_profile" element={<UserProfile />} />
		</Routes>

	</div>;
=======
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
>>>>>>> 46d45142ffebf4f50139081c1bb61577aadcaa6c
}

export default Profile;