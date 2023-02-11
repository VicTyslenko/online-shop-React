import { Container } from '@mui/material';
import React from 'react';
import { ContainerWrapper,RightContent } from './StyledOrders';
import Grid from '@mui/material/Grid';
import Sidebar from '../../components/Sidebar';
function EditOrders() {
	return (
		<ContainerWrapper>
		<Container maxWidth="lg">
			<Grid container >
				<Grid item xs={3}>
					<Sidebar />
				</Grid>
				<Grid item xs={9}>
					<RightContent>
						<h1 className="title">Orders</h1>
					</RightContent>
				</Grid>
			</Grid>
		</Container>
	</ContainerWrapper>
	)
}

export default EditOrders;
