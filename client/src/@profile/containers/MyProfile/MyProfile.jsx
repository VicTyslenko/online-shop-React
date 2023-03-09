import { Container, TextField, Radio, RadioGroup, FormControlLabel, FormControl, Button } from '@mui/material';
import { Title, ContentForm, ContainerWrapp, Form } from './StyledMyProfile';
import { profileUserSelector } from '../../../@main/store/selectors/profileUserSelector';
import { tokenDataSelector } from '../../../@main/store/selectors/registrationSelector';
import { useSelector, useDispatch } from 'react-redux';
import { useUserData } from '../../hooks/useUserData';
import { Formik } from 'formik';
function MyProfile() {
	const user = useUserData();
	const dispatch = useDispatch();
	

	/*Добавить даные пользователя в форму*/
	return (
		<Container maxWidth="lg">
			<Title>My Account</Title>
			<ContainerWrapp>
				<ContentForm>
					<Formik
						initialValues={{
							firstName: '',
							lastName: `${user.lastName}`,
							email: "",
							mobile: '',
							address: '',
							birthday:''
						}}
					>
						{(props) => (
							<Form onSubmit={props.handleSubmit}>
								<TextField
									id="standard-basic"
									type="string"
									fullWidth
									name='email'
									label=""
									placeholder={user.email}
									onChange={props.handleChange}
									multiline
									variant="standard"
									sx={{ mb: '6px' }}
								/>
								<TextField
									id="standard-basic"
									type="string"
									fullWidth
									name='firstName'
									label=""
									placeholder={user.firstName}
									onChange={props.handleChange}
									multiline
									variant="standard"
									sx={{ mb: '6px' }}
								/>
								<TextField
									id="standard-basic"
									type="string"
									fullWidth
									name='lastName'
								
									placeholder={user.lastName}
									onChange={props.handleChange}
									multiline
									variant="standard"
									sx={{ mb: '6px' }}
								/>

								<TextField
									id="standard-basic"
									type="number"
									fullWidth
									name='mobile'
								
									onChange={props.handleChange}
									placeholder="+38"
									multiline
									variant="standard"
									sx={{ mb: '6px' }}
								/>
								<FormControl>
									<RadioGroup
										sx={{ borderRadius: '12px' }}
										row
										aria-labelledby="demo-row-radio-buttons-group-label"
										name="row-radio-buttons-group"
									>
										<FormControlLabel value="female" control={<Radio />} label="Male" />
										<FormControlLabel value="male" control={<Radio />} label="Female" />
									</RadioGroup>
								</FormControl>
								<TextField
									id="standard-basic"
									type="number"
									fullWidth
									name='birthday'
									value={props.values.birthday}
									onChange={props.handleChange}
									label="Birthday"
									placeholder="Dd/mm/yyyy"
									multiline
									variant="standard"
									sx={{ mb: '6px' }}
								/>
							</Form>
						)}
					</Formik>

					<Button
						variant="contained"
						sx={{
							backgroundColor: 'black',
						}}
						onClick={() => {
							// onClick();
						}}
					>
						SAVE
					</Button>
				</ContentForm>
			</ContainerWrapp>
		</Container>
	);
}

export default MyProfile;
