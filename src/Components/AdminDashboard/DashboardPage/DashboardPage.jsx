import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import MainDash from './MainDash/MainDash'
import './DashboardPage.scss'
export const DashboardPage = () => {
    return (
        <div className='dashboard-wrapp'>
            <div className="sidebar-wrapp">
                <Sidebar />
                <MainDash />
            </div>
        </div>
    )
}

export default DashboardPage