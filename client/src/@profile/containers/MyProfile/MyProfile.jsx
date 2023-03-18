import { Container, Radio, RadioGroup, FormControlLabel, FormControl, Button } from '@mui/material';
import { Title, ContainerWrapp, FormWrapper, CssTextField } from './StyledMyProfile';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useUserData } from '../../hooks/useUserData';
import { Formik } from 'formik';
import { editInfoSelector, errorDataUpdatedInfo } from '../../../@main/store/selectors/editInfoSelector';
import PaymentModal from '../../../@main/containers/ShoppingCart/Modal/Modal';
import { editInfoFetchData } from '../../../@main/store/actions/editCustomerInfoAction';
function MyProfile() {
	const [open, setOpen] = useState(false);
	const modalOpen = () => {
		setOpen(true);
	};
	const modalClose = () => {
		setOpen(false);
	};
	const error = useSelector(errorDataUpdatedInfo);

	// const errorMessage = error.telephone;
	const dispatch = useDispatch();
	const user = useUserData();
	const upDatedUser = useSelector(editInfoSelector);
	return (
		<Container maxWidth="lg">
			<ContainerWrapp>
				<FormWrapper>
					<Title> Edit My Account</Title>
					<Formik
						initialValues={{
							firstName: upDatedUser ? `${upDatedUser.firstName}` : `${user.firstName}`,
							lastName: upDatedUser ? `${upDatedUser.lastName}` : `${user.lastName}`,
							email: upDatedUser ? `${upDatedUser.email}` : `${user.email}`,
							telephone: upDatedUser ? `${upDatedUser.telephone}` : '',
							address: upDatedUser ? `${upDatedUser.address}` : '',
							birthdate: upDatedUser ? `${upDatedUser.birthdate}` : '',
							gender: upDatedUser ? `${upDatedUser.gender}` : '',
						}}
						onSubmit={(values) => {
							// console.log('onSubmit', values);
							dispatch(editInfoFetchData(values));
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
								{/* {error && <div className="error">{error.telephone}</div>} */}
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
									label="Address"
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
										onClick={() => {
											// {
											// 	error ? modalOpen() : modalClose();
											// }
											modalOpen();
										}}
									>
										SAVE
									</Button>

									{open && (
										<PaymentModal open={open} close={modalClose}>
											Information has been saved
										</PaymentModal>
									)}
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
