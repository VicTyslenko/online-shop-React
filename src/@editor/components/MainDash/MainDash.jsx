import React from 'react'
import Management from "../Sidebar/components/Management";
import { Route, Routes } from "react-router-dom";
import Customers from "../Sidebar/components/Customers";
import Orders from "../Sidebar/components/Orders";
import Products from "../Sidebar/components/Products";
import Dashboard from "../Sidebar/components/Dashboard";

import { ContainerWrap } from './StyledMainDash';


const MainDash = () => {
	return (
		<ContainerWrap >
			<Routes>
				<Route index element={<Dashboard />} />
				<Route path="/Management" element={<Management />} />
				<Route path="/Customers" element={<Customers />} />
				<Route path="/Orders" element={<Orders />} />
				<Route path="/Products" element={<Products />} />
			</Routes>
		</ContainerWrap>
	)
}

export default MainDash
