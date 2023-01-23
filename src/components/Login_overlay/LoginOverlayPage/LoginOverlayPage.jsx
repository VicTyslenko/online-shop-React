/* eslint-disable import/extensions */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Formik, Form } from 'formik';
import Radio from '@mui/material/Radio';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { validationSchema } from '../validation';
import {
	Container,
	LoginWrapper,
	HeadWrapp,
	Description,
	InputsWrapp,
	RadioWrapp,
	StyledButton,
	ButtonWrapp,
} from './StyledLogin';

function LoginOverlayPage() {
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
						<div className="login-wrapp">
							<p className="login">Login</p>
							<hr />
						</div>
						<p>Registration</p>
					</HeadWrapp>
					<Description>Please enter your account details to log in</Description>
					<Form>
						<InputsWrapp>
							<CssTextField variant="standard" label="E-mail" fullWidth />
							<CssTextField variant="standard" label="Password" fullWidth />
						</InputsWrapp>
						<RadioWrapp>
							<Radio
								sx={{
									'& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)': {
										color: 'white',
									},
								}}
							/>
							<p>Keep me signed in</p>
						</RadioWrapp>

						{/* <TextField
          fullWidth
          variant='standard'
          label="E-mail"
          sx={{
            '& .MuiInput-underline:before': { borderBottomColor: 'white' },
      
            "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
              border: "2px solid",
              borderColor: "yellow"
            }
           
          }} */}

						{/* <TextField fullWidth label="Password" variant="standard"  /> */}
						<ButtonWrapp>
							<StyledButton>LOG IN</StyledButton>
						</ButtonWrapp>
					</Form>
				</LoginWrapper>
			</Formik>
		</Container>
	);
}

export default LoginOverlayPage;
