import { Container } from '@mui/material';
import React from 'react';
import { MainContent, Title } from './StyledOrders';

function EditOrders() {
	return (
		<Container maxWidth="lg">
			<MainContent>
				<Title>Orders</Title>
			</MainContent>
		</Container>
	);
}

export default EditOrders;
