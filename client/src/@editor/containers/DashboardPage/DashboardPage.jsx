import React from 'react';
import { Container } from '@mui/material';
// import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
// import MainDash from '../../components/MainDash';
import { SideBarWrapp } from './StyledDashboardPage';

export function DashboardPage() {
	return (
		<Container maxWidth='lg'sx={{
			marginBottom:'40px',

		}}>
			{/* <Link to='/editor/products'>products</Link> <br/>
			<Link to='/editor/shop'>shop</Link><br/>
			<Link to='/editor/users'>users</Link><br/>
			<Link to='/editor/style-shop'>style-shop</Link><br/>
			<Link to='/editor/orders'>orders</Link> */}
			<SideBarWrapp>
			<Sidebar />
			</SideBarWrapp>
		</Container>
	);
}

export default DashboardPage;
