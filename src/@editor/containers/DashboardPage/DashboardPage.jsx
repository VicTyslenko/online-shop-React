import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import MainDash from '../../components/MainDash/MainDash'
// import Cards from '../../components/Cards/Cards'
import './DashboardPage.scss'
export const DashboardPage = () => {
    return (
        <div className='dashboard-wrapp'>
            <div className="sidebar-wrapp">
                <Sidebar />
                {/* <Cards /> */}
                <MainDash />
            </div>
        </div>
    )
}

export default DashboardPage