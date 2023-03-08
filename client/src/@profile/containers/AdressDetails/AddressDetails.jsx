import { React, useState } from 'react';
import { Container, TextField } from '@mui/material';
import { Title, ContentForm, StyledLink } from '../AdressDetails/StyledAddressDetails';
import { validationDeliverySchema } from '../../validation';
import { useDispatch, useSelector } from 'react-redux';
import { addressFetchData } from '../../../@main/store/actions/addressActions';
import { useUserData } from '../../hooks/useUserData';
import { cartDataSelect } from '../../../@main/store/selectors/cartSelector'
import { Formik } from 'formik';
const AddressDetails = () => {
	const dispatch = useDispatch();
	const user = useUserData();
	const products = useSelector(cartDataSelect);
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
					firstName: '',
					lastName: '',
					email: '',
					mobile: '',
					address: '',
				}}
				validationSchema={validationDeliverySchema}
				onSubmit={async (values) => {
					dispatch(addressFetchData({ ...values, customerId: user?.id,products }));
				}}
			>
				{(props) => (
					<ContentForm>
						<form onSubmit={props.handleSubmit}>
							<Title>Please,fill the form with your details and delivery address</Title>

							<TextField
								type="string"
								fullWidth
								name="email"
								value={props.values.email}
								onChange={props.handleChange}
								error={props.touched.email && Boolean(props.errors.email)}
								helperText={props.touched.email && props.errors.email}
								label="Email Adress"
								placeholder="Email"
								multiline
								variant="standard"
								sx={{ mb: '6px' }}
							/>
							<TextField
								type="string"
								fullWidth
								name="firstName"
								label="First Name"
								placeholder="Your first name"
								multiline
								variant="standard"
								onChange={props.handleChange}
								error={props.touched.firstName && Boolean(props.errors.firstName)}
								helperText={props.touched.firstName && props.errors.firstName}
								sx={{ mb: '6px' }}
							/>
							<TextField
								name="lastName"
								type="string"
								fullWidth
								label="Last name "
								placeholder="Your second name"
								multiline
								variant="standard"
								value={props.values.lastName}
								onChange={props.handleChange}
								error={props.touched.lastName && Boolean(props.errors.lastName)}
								helperText={props.touched.lastName && props.errors.lastName}
								sx={{ mb: '6px' }}
							/>

							<TextField
								type="number"
								fullWidth
								name="mobile"
								label="Mobile Phone"
								placeholder="+38"
								multiline
								variant="standard"
								value={props.values.mobile}
								onChange={props.handleChange}
								error={props.touched.mobile && Boolean(props.errors.mobile)}
								helperText={props.touched.mobile && props.errors.mobile}
								sx={{ mb: '6px' }}
							/>

							{/* <TextField
									// id="standard-basic"
									type="number"
									fullWidth
									label="Birthday"
									name='birthday'
									placeholder="dd/mm/yyyy"
									multiline
									variant="standard"
									value={props.values.birthday}
									onChange={props.handleChange}
									error={props.touched.birthday && Boolean(props.errors.birthday)}
									helperText={props.touched.birthday && props.errors.birthday}
									sx={{ mb: '6px' }}
								/> */}
							<TextField
								type="string"
								fullWidth
								label="Address"
								placeholder="address"
								name="address"
								multiline
								variant="standard"
								value={props.values.address}
								onChange={props.handleChange}
								error={props.touched.address && Boolean(props.errors.address)}
								helperText={props.touched.address && props.errors.address}
								sx={{ mb: '6px' }}
							/>

							<div>
								<div className="button-wrapp">
									<StyledLink to={'/payment'}>Save</StyledLink>
								</div>
							</div>
						</form>
					</ContentForm>
				)}
			</Formik>
		</Container>
	);
};

export default AddressDetails;

{
	/* <FormControl>
<RadioGroup
	sx={{ borderRadius: '12px' }}
	row
	aria-labelledby="demo-row-radio-buttons-group-label"
	name="row-radio-buttons-group"
>
	<FormControlLabel value="female" control={<Radio />} label="Male" />
	<FormControlLabel value="male" control={<Radio />} label="Female" />
</RadioGroup>
</FormControl> */
}
