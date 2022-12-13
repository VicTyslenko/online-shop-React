import React from 'react'
import Cards from '../Cards/Cards'
import {Route, Routes} from "react-router-dom";
import './MainDash.scss'
import Analytics from "../Sidebar/components/Analytics";
import Customers from "../Sidebar/components/Customers";
import Dashboard from "../Sidebar/components/Dashboard";
import Orders from "../Sidebar/components/Orders";
import Products from "../Sidebar/components/Products";


const MainDash = () => {
    return (
        <div className='main-dash'>
			<Routes>
				<Route path="/Dashboard" element={<Dashboard/>} />
				<Route path="/Analytics" element={<Analytics/>} />
				<Route path="/Customers" element={<Customers/>} />
				<Route path="/Orders" element={<Orders/>} />
				<Route path="/Products" element={<Products/>} />
			</Routes>
            <Cards />
        </div>
    )
}

export default MainDash
