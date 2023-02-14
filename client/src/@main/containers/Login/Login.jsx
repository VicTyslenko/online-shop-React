import React from 'react';
import { Formik, Form } from 'formik';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { validationSchema } from './validation';
import {
	LoginWrapper,
	HeadWrapp,
	Description,
	InputsWrapp,
	CheckBoxWrapp,
	StyledButton,
	ButtonWrapp,
	ContainerWrapper,
	StyledLink
} from './StyledLogin';

function Login() {
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
				
						<Description>Please enter your account details to log in</Description>
						<Form>
							<InputsWrapp>
								<CssTextField variant="standard" label="E-mail" fullWidth />
								<CssTextField variant="standard" label="Password" fullWidth />
							</InputsWrapp>
							<CheckBoxWrapp>
								<Checkbox
									sx={{
										'& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)': {
											color: 'white',
										},
									}}
								/>
								<p className='box-text'>Keep me signed in</p>
							</CheckBoxWrapp>

							<ButtonWrapp>
								<StyledButton>LOG IN</StyledButton>
							</ButtonWrapp>
						</Form>
					</LoginWrapper>
				</Formik>
			</Container>
	);
}

export default Login;
