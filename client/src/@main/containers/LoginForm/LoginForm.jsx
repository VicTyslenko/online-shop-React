// import React from 'react'
import { useState } from 'react';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TextField from '@mui/material/TextField';
import { validationSchema } from './validation';
import { styled } from '@mui/material/styles';
import { Formik, Form } from 'formik';
import Checkbox from '@mui/material/Checkbox';

import { Container } from '@mui/system';
import {
	ContainerWrapper,
	HeadWrapp,
	Description,
	InputsWrapp,
	CheckBoxWrapp,
	StyledButton,
	ButtonWrapp,
	LoginWrapper,
	LoginWrapperReg,
	ButtonWrappReg,
	StyledButtonReg,
	InputsWrappReg,
} from './StyledLoginForm';

const LoginForm = () => {
	const CssTextField = styled(TextField)({
		'& label.Mui-focused': {
			color: 'white',
		},

		'& .MuiInput-underline:after': {
			borderBottomColor: 'white',
		},
		'& .MuiInput-underline:before': { borderBottomColor: 'white' },
		'& .MuiOutlinedInput-root': {
		
			'&:hover textfield': {
				borderColor: 'white',
			},
		
			'& .MuiInput-root': {
				color: 'white',
			},
		},
	});

	const [value, setValue] = useState('1');
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<ContainerWrapper>
			<Container
				maxWidth="lg"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<TabContext value={value}>
					<HeadWrapp>
						<TabList onChange={handleChange}>
							<Tab className="list-item login" label="Login" value="1" />
							<Tab className="list-item registration" label="Registration" value="2" />
						</TabList>
					</HeadWrapp>
					<TabPanel value="1">
						{/* <Login /> */}
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
										<p className="box-text">Keep me signed in</p>
									</CheckBoxWrapp>

									<ButtonWrapp>
										<StyledButton>LOG IN</StyledButton>
									</ButtonWrapp>
								</Form>
							</LoginWrapper>
						</Formik>
					</TabPanel>
					<TabPanel value="2">
						<Formik
							initialValues={{
								email: '',
								password: '',
							}}
							validationSchema={validationSchema}
						>
							<LoginWrapperReg>
								<Form>
									<InputsWrappReg>
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
										<label>
											<p className="label-text">password</p>
											<CssTextField variant="standard" label="Password" fullWidth />
										</label>

										<CssTextField variant="standard" label="Confirm your password" fullWidth />
									</InputsWrappReg>
								</Form>
								<ButtonWrappReg>
									<StyledButtonReg>Register</StyledButtonReg>
								</ButtonWrappReg>
							</LoginWrapperReg>
						</Formik>
					</TabPanel>
				</TabContext>
			</Container>
		</ContainerWrapper>
	);
};

export default LoginForm;
