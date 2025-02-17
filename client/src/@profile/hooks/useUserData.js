import jwt_decode from "jwt-decode";
import { useSelector } from "react-redux";

import { profileUserSelector } from "../../@main/store/selectors/profileUserSelector";
import { tokenDataSelector } from "../../@main/store/selectors/registrationSelector";

export const useUserData = () => {
	const register = useSelector(tokenDataSelector);

	const isAuth = useSelector(profileUserSelector);
	const user = isAuth ? jwt_decode(isAuth.token) : register ? jwt_decode(register.token) : null;
	return user;
};
