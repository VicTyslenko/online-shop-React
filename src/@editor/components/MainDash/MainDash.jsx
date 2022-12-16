import React from 'react'
import Cards from '../Cards/Cards'

import Management from "../Sidebar/components/Management";
import { Route, Routes } from "react-router-dom";
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
            <Cards />
        </ContainerWrap>
    )
}

export default MainDash
