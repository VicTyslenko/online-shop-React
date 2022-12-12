import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import './DashboardPage.scss'
export const DashboardPage = () => {
    return (
        <div className='dashboard-wrapp'>
            <div className="container">

                <Sidebar />
            </div>
        </div>
    )
}

export default DashboardPage