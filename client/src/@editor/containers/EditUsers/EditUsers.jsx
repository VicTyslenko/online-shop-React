import React from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ContainerWrapper,RightContent } from './StyledUsers';
import Sidebar from '../../components/Sidebar';
function EditUsers() {

	return (
		<ContainerWrapper>
		<Container maxWidth="lg">
			<Grid container spacing={2}>
				<Grid item xs={2}>
					<Sidebar />
				</Grid>
				<Grid item xs={6}>
					<RightContent>
						<h1 className="title">Users</h1>
					</RightContent>
				</Grid>
			</Grid>
		</Container>
	</ContainerWrapper>
	)
}

export default EditUsers;
