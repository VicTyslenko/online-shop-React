// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import '../../containers/LoginPage/LoginPage.scss';
import { ButtonItem } from './StyledButton';

export default function LoginButton() {
	return (
		<ButtonItem variant="contained" disableElevation>
			Log in
		</ButtonItem>
	);
}
