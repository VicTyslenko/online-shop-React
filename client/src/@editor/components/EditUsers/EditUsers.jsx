import React from 'react';
import { Container } from '@mui/material';
import { MainContent, Header } from './StyledUsers';

function EditUsers() {
	return (
		<Container maxWidth="lg">
			<Header>Users</Header>
			<MainContent></MainContent>
		</Container>
	);
}

export default EditUsers;
