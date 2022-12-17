import React from 'react'
import Cards from '../Cards/Cards'
import Table from '../Table/Table';
import Management from "../Sidebar/components/Management";
import { Route, Routes } from "react-router-dom";
import Customers from "../Sidebar/components/Customers";
import DashboardPage from '../../containers/DashboardPage/DashboardPage';
import Orders from "../Sidebar/components/Orders";
import Products from "../Sidebar/components/Products";

import { ContainerWrap } from './StyledMainDash';


const MainDash = () => {
	return (
		<ContainerWrap >
			{/* <h1>Dashboard</h1> */}
			<Routes>
				{/* <Route path="/Dashboard" element={<DashboardPage />} /> */}
				<Route path="/Management" element={<Management />} />
				<Route path="/Customers" element={<Customers />} />
				<Route path="/Orders" element={<Orders />} />
				<Route path="/Products" element={<Products />} />
			</Routes>
			<Cards />
			<Table />
		</ContainerWrap>
	)
}

export default MainDash
