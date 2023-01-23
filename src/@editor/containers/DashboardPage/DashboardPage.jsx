// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Container } from '@mui/material';
import Sidebar from '../../components/Sidebar';
import MainDash from '../../components/MainDash';
import { SideBarWrapp } from './StyledDashboardPage';
// import './DashboardPage.scss';

export function DashboardPage() {
	return (
		<Container maxWidth='lg'>
			<SideBarWrapp>
				<Sidebar />
				<MainDash />
			</SideBarWrapp>
		</Container>
	);
}

export default DashboardPage;
