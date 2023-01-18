// eslint-disable-next-line no-unused-vars
import React from 'react';
import Sidebar from '../../components/Sidebar';
import MainDash from '../../components/MainDash';
import { Wrapp, SideBarWrapp } from './StyledDashboardPage';
import './DashboardPage.scss';

export function DashboardPage() {
	return (
		<Wrapp>
			<SideBarWrapp>
				<Sidebar />
				<MainDash />
			</SideBarWrapp>
		</Wrapp>
	);
}

export default DashboardPage;
