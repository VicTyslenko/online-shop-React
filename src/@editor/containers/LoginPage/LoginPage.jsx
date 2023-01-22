/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Form, Formik } from 'formik';
import Face6Icon from '@mui/icons-material/Face6';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import LoginButton from '../../components/Button/Button';
import { LoginPageWrapp, FormWrapper, ImageWrapp, StyledInput, PassWrapp, InputWrapper } from './StyledLoginPage';


function LoginPage() {
	const formSubmit = (values) => {
		console.log(values);
	};

	return (
		<LoginPageWrapp>
			<Formik
				initialValues={{
					login: '',
					password: '',
				}}
				onSubmit={(values) => formSubmit(values)}
			>
				<Form>
					<ImageWrapp>
						<img className="image" src="../../../img/admin.jpg" alt="" />
					</ImageWrapp>

					<FormWrapper>
						<InputWrapper>
						
						<Face6Icon className="login-icon" />
							<StyledInput type="text" name="login" placeholder="Login" />
							
						</InputWrapper>
						<PassWrapp>
						
							<RemoveRedEyeIcon className="eye-icon" />
							<StyledInput type="password" name="password" placeholder="Password" />
						</PassWrapp>
						<LoginButton />
					</FormWrapper>
				</Form>
			</Formik>
		</LoginPageWrapp>
	);
}

export default LoginPage;
