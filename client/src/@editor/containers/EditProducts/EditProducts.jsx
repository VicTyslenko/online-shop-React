import React from 'react';
import { ContainerWrapper, RightContent } from './StyledEditProducts';
import Sidebar from '../../components/Sidebar';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
function EditProducts() {
	return (
		<ContainerWrapper>
			<Container maxWidth="lg">
				<Grid container >
					<Grid item xs={3}>
						<Sidebar />
					</Grid>
					<Grid item xs={9}>
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
