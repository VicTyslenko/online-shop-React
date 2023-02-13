import React from 'react';
import { Container } from '@mui/material';
import { MainContent, Header } from './StyledEditShop';

function EditShop() {
	return (
		<Container maxWidth="lg">
			<Header>Products</Header>

			<MainContent></MainContent>
		</Container>
	);
}

export default EditShop;
