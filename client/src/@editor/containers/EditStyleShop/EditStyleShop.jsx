import React from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Sidebar from '../../components/Sidebar';
import { ContainerWrapper,RightContent } from '../EditShop/StyledEditShop';
function EditStyleShop() {
	return (
		<ContainerWrapper>
			<Container maxWidth="lg">
				<Grid container >
					<Grid item xs={3}>
						<Sidebar />
					</Grid>
					<Grid item xs={9}>
						<RightContent>
							<h1 className="title">Style-Shop</h1>
						</RightContent>
					</Grid>
				</Grid>
			</Container>
		</ContainerWrapper>
	);
}

export default EditStyleShop;
