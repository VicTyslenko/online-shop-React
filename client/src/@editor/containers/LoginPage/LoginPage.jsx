import React from 'react';
import { Form, Formik } from 'formik';
import Face6Icon from '@mui/icons-material/Face6';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Container } from '@mui/material';
import { FormWrapper, ImageWrapp, StyledInput, PassWrapp, InputWrapper, StyledButton } from './StyledLoginPage';

function LoginPage() {
	const formSubmit = (values) => {
		console.log(values);
	};

	return (
		<Container
			maxWidth="lg"
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				background: 'black',
				height: '100vh',
			}}
		>
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
						<StyledButton>Log in</StyledButton>
					</FormWrapper>
				</Form>
			</Formik>
		</Container>
	);
}

export default LoginPage;
