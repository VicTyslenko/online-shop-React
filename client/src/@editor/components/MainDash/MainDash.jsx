import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Customers from '../Sidebar/components/Customers';
import Orders from '../Sidebar/components/Orders';
import Products from '../Sidebar/components/Products';
import Dashboard from '../Sidebar/components/Dashboard';

import { ContainerWrap } from './StyledMainDash';
import Editing from '../Sidebar/components/Management/components/Editing';
import Roles from '../Sidebar/components/Management/components/Roles';
import Users from '../Sidebar/components/Management/components/Users';

function MainDash() {
	return (
		<ContainerWrap>
			<Routes>
				<Route index element={<Dashboard />} />
				<Route path="/Customers" element={<Customers />} />
				<Route path="/Orders" element={<Orders />} />
				<Route path="/Products" element={<Products />} />
				<Route path="/editing" element={<Editing />} />
				<Route path="/roles" element={<Roles />} />
				<Route path="/users" element={<Users />} />
			</Routes>
		</ContainerWrap>
	);
}

export default MainDash;
