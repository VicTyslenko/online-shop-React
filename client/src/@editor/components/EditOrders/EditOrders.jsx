import { Container } from '@mui/material';
import React from 'react';
import { MainContent, Header } from './StyledOrders';

function EditOrders() {
	return (
		<Container maxWidth="lg">
			<Header>Products</Header>
			<MainContent></MainContent>
		</Container>
	);
}

export default EditOrders;
