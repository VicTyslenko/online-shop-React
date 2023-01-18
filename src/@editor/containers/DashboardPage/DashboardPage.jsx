import React from 'react';
import Sidebar from '../../components/Sidebar';
import MainDash from '../../components/MainDash';
import { Wrapp, SideBarWrapp } from './StyledDashboardPage';
import './DashboardPage.scss';

export const DashboardPage = () => {
	return (
		<Wrapp>
			<SideBarWrapp>
				<Sidebar />
				<MainDash />
			</SideBarWrapp>
		</Wrapp>
	);
};

export default DashboardPage;
