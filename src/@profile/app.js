import { Routes, Route } from "react-router";
import UserProfile from "./containers/UserProfile/UserProfile";

function Profile() {
	return <div>
		<Routes>
			<Route path="/user_profile" element={<UserProfile />} />
		</Routes>

	</div>;
}

export default Profile;