import { Container, TextField } from '@mui/material';
import { Title, ContentForm, ContainerWrapp, Form } from './StyledMyProfile';

function MyProfile() {
	return (
		<Container maxWidth="lg">
			<Title>Personal data</Title>
			<ContainerWrapp>
				<ContentForm>
					<Form>
						<div>
							<TextField
								id="standard-basic"
								type="string"
								fullWidth
								label="Name"
								multiline
								variant="standard"
								sx={{ mb: '6px' }}
							/>
							<TextField
								id="standard-basic"
								type="string"
								fullWidth
								label="Last name"
								multiline
								variant="standard"
								sx={{ mb: '6px' }}
							/>
							<TextField
								id="standard-basic"
								type="string"
								fullWidth
								label="Surnsme"
								multiline
								variant="standard"
								sx={{ mb: '6px' }}
							/>
						</div>
						<div>
							<TextField
								id="standard-basic"
								type="number"
								fullWidth
								label="Date of birth"
								multiline
								variant="standard"
								sx={{ mb: '6px' }}
							/>
							<TextField
								id="standard-basic"
								type="number"
								fullWidth
								label="Phone"
								multiline
								variant="standard"
								sx={{ mb: '6px' }}
							/>
							<TextField
								id="standard-basic"
								type="string"
								fullWidth
								label="E-mail"
								multiline
								variant="standard"
								sx={{ mb: '6px' }}
							/>
						</div>
					</Form>

					{/* <div>
						<Button
							variant="contained"
							color="success"
							onClick={() => {
								onClick();
							}}
						>
							Ok
						</Button>
					</div> */}
				</ContentForm>
			</ContainerWrapp>
		</Container>
	);
}

export default MyProfile;
