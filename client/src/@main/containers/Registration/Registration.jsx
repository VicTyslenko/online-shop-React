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
			<Container
				maxWidth="lg"
				sx={{
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
				
						<Form>
							<InputsWrapp>
						
								<label>
									First name
									<p className="label-text">first name</p>
									<CssTextField variant="standard" label="Your first name" fullWidth />
								</label>
								<label>
									<p className="label-text">second name</p>
									<CssTextField variant="standard" label="Your second name" fullWidth />
								</label>
								<label>
									<p className="label-text">email address</p>
									<CssTextField variant="standard" label="Email address" fullWidth />
								</label>
								<label >
									<p className="label-text">password</p>
									<CssTextField variant="standard" label="Password" fullWidth />
								</label>

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

export default Registration;
