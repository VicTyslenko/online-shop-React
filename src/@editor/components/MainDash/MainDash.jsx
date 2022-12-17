import React from 'react'
import Cards from '../Cards/Cards'

import Management from "../Sidebar/components/Management";
import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import Table from '../Table/Table';
import Analytics from "../Sidebar/components/Analytics";
=======
>>>>>>> eeb5f735a8fb088291abc2a13280798843e00a59
import Customers from "../Sidebar/components/Customers";
import Dashboard from "../Sidebar/components/Dashboard";
import Orders from "../Sidebar/components/Orders";
import Products from "../Sidebar/components/Products";

import { ContainerWrap } from './StyledMainDash';


const MainDash = () => {
    return (
        <ContainerWrap >
			<Routes>
				<Route path="/Dashboard" element={<Dashboard/>} />
				<Route path="/Management" element={<Management/>} />
				<Route path="/Customers" element={<Customers/>} />
				<Route path="/Orders" element={<Orders/>} />
				<Route path="/Products" element={<Products/>} />
			</Routes>
<<<<<<< HEAD
			<Cards />
			<Table />
		</MainDashWrapp>
	)
=======
            <Cards />
        </ContainerWrap>
    )
>>>>>>> eeb5f735a8fb088291abc2a13280798843e00a59
}

export default MainDash
