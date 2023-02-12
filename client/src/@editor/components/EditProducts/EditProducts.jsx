import React from 'react';
import { MainContent, ContentForm, Header, ContainerWrapp, ButtonWrap, InputTitle } from './StyledEditProducts';
import { Container, TextField, Box, Button } from '@mui/material';

function EditProducts() {
	return (
		<Container maxWidth="lg">
			<ContainerWrapp>
				<ContentForm>
					<Header>Products</Header>
					<MainContent>
						<Box component="form" sx={{ width: '100%', p: '24px' }}>
							<InputTitle>Name</InputTitle>
							<TextField
								sx={{ mb: '22px' }}
								fullWidth
								size="small"
								id="demo-helper-text-misaligned-no-helper"
								label="Name"
							/>
							<InputTitle>Email</InputTitle>
							<TextField
								sx={{ mb: '22px' }}
								fullWidth
								size="small"
								id="demo-helper-text-misaligned-no-helper"
								label="Email"
							/>
							<InputTitle>Phone Number</InputTitle>
							<TextField
								sx={{ mb: '22px' }}
								fullWidth
								size="small"
								id="demo-helper-text-misaligned-no-helper"
								label="Phone Number"
							/>
							<InputTitle>Assing Permissions</InputTitle>
						</Box>
					</MainContent>
					<ButtonWrap>
						<Button
							variant="contained"
							color="success"
							onClick={() => {
								onClick();
							}}
						>
							Ok
						</Button>
					</ButtonWrap>
				</ContentForm>
			</ContainerWrapp>
		</Container>
	);
}

export default EditProducts;
