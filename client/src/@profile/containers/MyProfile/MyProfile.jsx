import { Container, Box, TextField, Radio, RadioGroup, FormControlLabel, FormControl, Typography,Button, createTheme } from '@mui/material';
import { Title, ContentForm, ContainerWrapp, Form } from './StyledMyProfile';

function MyProfile() {
	// const theme = createTheme({
	// 	palette:{
	// 		primary:{
	// 			dark:'#000000'
	// 		}
	// 	}
	// })
	return (
		<Container maxWidth="lg">
			<Title>My Account</Title>
			<ContainerWrapp>
				<ContentForm>
					<Form>
						<div>
							<TextField
								id="standard-basic"
								type="string"
								fullWidth
								label="Email Adress"
								placeholder="Email"
								multiline
								variant="standard"
								sx={{ mb: '6px' }}
							/>
							<TextField
								id="standard-basic"
								type="string"
								fullWidth
								label="First Name"
								placeholder="Your first name"
								multiline
								variant="standard"
								sx={{ mb: '6px' }}
							/>
							<TextField
								id="standard-basic"
								type="string"
								fullWidth
								label="Second Name "
								placeholder="Your second name"
								multiline
								variant="standard"
								sx={{ mb: '6px' }}
							/>

							<TextField
								id="standard-basic"
								type="number"
								fullWidth
								label="Mobile Phone"
								placeholder="+38"
								multiline
								variant="standard"
								sx={{ mb: '6px' }}
							/>
							<FormControl>
								<RadioGroup
								sx={{borderRadius:'12px'}}
									row
									aria-labelledby="demo-row-radio-buttons-group-label"
									name="row-radio-buttons-group"
								>
									<FormControlLabel value="female" control={<Radio  />} label="Male" />
									<FormControlLabel value="male" control={<Radio />} label="Female" />
								</RadioGroup>
							</FormControl>
							<TextField
								id="standard-basic"
								type="number"
								fullWidth
								label="Birthday"
								placeholder="Dd/mm/yyyy"
								multiline
								variant="standard"
								sx={{ mb: '6px' }}
							/>
						</div>
					</Form>

					<div>
						<Button
							variant="contained"
							sx={{
								backgroundColor:'black'
							}}
							onClick={() => {
								onClick();
							}}
						>
							SAVE
						</Button>
					</div>
				</ContentForm>
			</ContainerWrapp>
		</Container>
	);
}

export default MyProfile;
