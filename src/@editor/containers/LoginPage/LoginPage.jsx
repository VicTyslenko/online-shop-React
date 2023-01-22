/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Form, Formik } from 'formik';

import Input from '../../components/Input';
import LoginButton from '../../components/Button/Button';
import { LoginPageWrapp, FormWrapper } from './StyledLoginPage';

import './LoginPage.scss';

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
					<div className="img-wrapp">
						<img className="image" src="../../../img/admin.jpg" alt="" />
					</div>
					<FormWrapper>
						<div className="input-wrapper">
							{/* <BsFillPersonFill className="login-icon" /> */}
							{/* <FcBusinessman className="login-icon" /> */}

							<Input type="text" name="login" placeholder="Login" className="login-input" />
						</div>
						<div className="pass-wrapp">
							{/* <AiTwotoneLock className="lock-icon" /> */}
						
							{/* <BsFillEyeFill className="eye-icon" /> */}
							<Input type="password" name="password" placeholder="Password" className="pass-input" />
						</div>
						<LoginButton />
					</FormWrapper>
				</Form>
			</Formik>
		</LoginPageWrapp>
	);
}

export default LoginPage;
