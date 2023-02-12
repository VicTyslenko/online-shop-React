import { Container } from '@mui/material';
import React from 'react';
import { MainContent, Title } from './StyledDashboard';

function Dashboard() {
	return (
		<Container maxWidth="lg">
			<MainContent>
				<Title>Dashboard</Title>
			</MainContent>
		</Container>
	);
}

export default Dashboard;
