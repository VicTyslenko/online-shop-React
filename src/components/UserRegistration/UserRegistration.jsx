// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Formik, Form } from 'formik';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { Container, LoginWrapper, HeadWrapp, ButtonWrapp, StyledButton, InputsWrapp } from './StyledUserRegistration';

// eslint-disable-next-line import/no-unresolved
import { validationSchema } from './validation';

function UserRegistration() {
	const CssTextField = styled(TextField)({
		'& label.Mui-focused': {
			color: 'white',
		},

		'& .MuiInput-underline:after': {
			borderBottomColor: 'white',
		},
		'& .MuiInput-underline:before': { borderBottomColor: 'white' },
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: 'red',
			},
			'&:hover textfield': {
				borderColor: 'white',
			},
			'& .MuiInput-root': {
				color: 'white',
			},
		},
	});
	return (
		<Container>
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				validationSchema={validationSchema}
			>
				<LoginWrapper>
					<HeadWrapp>
						<p className="login">Login</p>
						<div className="login-wrapp">
							<p className="login">Registration</p>
							<hr />
						</div>
					</HeadWrapp>
					<Form>
						<InputsWrapp>
							<div className="first">
								<p className="head">first name</p>
								<CssTextField variant="standard" label="Your first name" fullWidth />
							</div>
							<div className="second">
								<p className="head">second name</p>
								<CssTextField variant="standard" label="Your second name" fullWidth />
							</div>
							<div className="email">
								<p className="head">email address</p>
								<CssTextField variant="standard" label="Email address" fullWidth />
							</div>
							<div className="password">
								<p className="head">password</p>
								<CssTextField variant="standard" label="Password" fullWidth />
							</div>

							<CssTextField variant="standard" label="Confirm your password" fullWidth />
						</InputsWrapp>
					</Form>
					<ButtonWrapp>
						<StyledButton>Register</StyledButton>
					</ButtonWrapp>
				</LoginWrapper>
			</Formik>
		</Container>
	);
}

export default UserRegistration;
