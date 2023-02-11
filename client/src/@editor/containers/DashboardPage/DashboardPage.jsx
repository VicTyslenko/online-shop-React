import React from 'react';
import { Container } from '@mui/material';
import Sidebar from '../../components/Sidebar';
import { ContainerWrapper, RightContent } from './StyledDashboardPage';
import Grid from '@mui/material/Grid';

export function DashboardPage() {
	return (
		<ContainerWrapper>
			<Container maxWidth="lg">
				<Grid container>
					<Grid item xs={3}>
						<Sidebar />
					</Grid>
					<Grid item xs={9}>
						<RightContent>
							<h1 className="title">Dashboard</h1>
						</RightContent>
					</Grid>
				</Grid>
			</Container>
		</ContainerWrapper>
	);
}

export default DashboardPage;
