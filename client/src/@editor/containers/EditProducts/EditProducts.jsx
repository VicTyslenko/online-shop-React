import React from 'react';
import { ContainerWrapper, RightContent } from './StyledEditProducts';
import Sidebar from '../../components/Sidebar';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
function EditProducts() {
	return (
		<ContainerWrapper>
			<Container maxWidth="lg">
				<Grid container spacing={2}>
					<Grid item xs={2}>
						<Sidebar />
					</Grid>
					<Grid item xs={6}>
						<RightContent>
							<h1 className="title">Products</h1>
						</RightContent>
					</Grid>
				</Grid>
			</Container>
		</ContainerWrapper>
	);
}

export default EditProducts;
