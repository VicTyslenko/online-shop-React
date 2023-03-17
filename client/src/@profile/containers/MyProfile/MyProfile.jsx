import { Container, Radio, RadioGroup, FormControlLabel, FormControl, Button } from '@mui/material';
import { Title, ContainerWrapp, FormWrapper, CssTextField } from './StyledMyProfile';
import { useDispatch } from 'react-redux';
import { useUserData } from '../../hooks/useUserData';
import { Formik } from 'formik';
import { editInfoFetchData } from '../../../@main/store/actions/editCustomerInfoAction';
function MyProfile() {
	const dispatch = useDispatch();
	const user = useUserData();

	return (
		<Container maxWidth="lg">
			<ContainerWrapp>
				<FormWrapper>
					<Title>My Account</Title>
					<Formik
						initialValues={{
							firstName: `${user.firstName}`,
							lastName: `${user.lastName}`,
							email: `${user.email}`,
							telephone: '',
							address: '',
							birthdate: '',
							gender: '',
						}}
						onSubmit={(values) => {
							{
								user && dispatch(editInfoFetchData(values));
							}
						}}
					>
						{(props) => (
							<form onSubmit={props.handleSubmit}>
								<CssTextField
									id="standard-basic"
									type="string"
									fullWidth
									name="email"
									label="E-mail"
									value={props.values.email}
									onChange={props.handleChange}
									multiline
									variant="standard"
								/>
								<CssTextField
									id="standard-basic"
									type="string"
									fullWidth
									name="firstName"
									value={props.values.firstName}
									label="First Name"
									onChange={props.handleChange}
									multiline
									variant="standard"
								/>
								<CssTextField
									id="standard-basic"
									type="string"
									fullWidth
									label="Last Name"
									name="lastName"
									value={props.values.lastName}
									onChange={props.handleChange}
									multiline
									variant="standard"
								/>

								<CssTextField
									id="standard-basic"
									type="number"
									fullWidth
									name="telephone"
									label="Phone number"
									placeholder="+38"
									value={props.values.telephone}
									onChange={props.handleChange}
									multiline
									variant="standard"
									sx={{ mb: '6px' }}
								/>
								<CssTextField
									id="standard-basic"
									type="number"
									fullWidth
									name="birthdate"
									value={props.values.birthdate}
									onChange={props.handleChange}
									label="Birthday"
									placeholder="Dd/mm/yyyy"
									multiline
									variant="standard"
								/>
								<CssTextField
									id="standard-basic"
									type="number"
									fullWidth
									name="address"
									value={props.values.address}
									onChange={props.handleChange}
									label="Delivery address"
									multiline
									variant="standard"
								/>
								<FormControl
									sx={{
										marginBottom: '3rem',
									}}
								>
									<RadioGroup
										sx={{ borderRadius: '12px' }}
										row
										aria-labelledby="demo-row-radio-buttons-group-label"
										name="gender"
										onChange={props.handleChange}
										value={props.values.gender}
									>
										<FormControlLabel value="male" control={<Radio />} label="Male" />
										<FormControlLabel value="female" control={<Radio />} label="Female" />
									</RadioGroup>
								</FormControl>
								<div className="btn-wrapp">
									<Button
										type="submit"
										variant="contained"
										sx={{
											backgroundColor: 'black',
										}}
									>
										SAVE
									</Button>
								</div>
							</form>
						)}
					</Formik>
				</FormWrapper>
			</ContainerWrapp>
		</Container>
	);
}

export default MyProfile;
