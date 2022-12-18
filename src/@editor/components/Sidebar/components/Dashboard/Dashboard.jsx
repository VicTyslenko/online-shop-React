import React from 'react';
import Cards from "./components/Cards";
import Table from "./components/Table";
import RightSide from '../../../RightSide/RightSide';
import { DashboardWrapper, MiddleWrapper } from './StyledDashboard';
const Dashboard = () => {
	return (
		<DashboardWrapper>
			<MiddleWrapper>
				<Cards />
				<Table />
			</MiddleWrapper>
			<RightSide />
		</DashboardWrapper>
	);
};

export default Dashboard;
