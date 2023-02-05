import React from 'react';
import { Formik, Form } from 'formik';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/system';
import {
	LoginWrapper,
	HeadWrapp,
	ButtonWrapp,
	StyledButton,
	InputsWrapp,
	StyledLink,
	ContainerWrapper,
} from './StyledRegistration';
import { validationSchema } from './validation';

function Registration() {
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
		<ContainerWrapper>
			<Container
				maxWidth="lg"
				sx={{
					background: 'black',
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<Formik
					initialValues={{
						email: '',
						password: '',
					}}
					validationSchema={validationSchema}
				>
					<LoginWrapper>
						<HeadWrapp>
							<StyledLink to="/login" className="login">
								Login
							</StyledLink>
							<div className="login-wrapp">
							
								<StyledLink to="/registration" className="login">
									Registration
								</StyledLink>
								<hr />
							</div>
						</HeadWrapp>
						<Form>
							<InputsWrapp>
						
								<label className="input-wrapper">
									First name
									<p className="label-text">first name</p>
									<CssTextField variant="standard" label="Your first name" fullWidth />
								</label>
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
		</ContainerWrapper>
	);
}

export default Registration;
