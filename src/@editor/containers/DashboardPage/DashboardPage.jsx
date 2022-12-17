import React from 'react'
import Sidebar from '../../components/Sidebar'
import MainDash from '../../components/MainDash'
import { Wrapp } from './StyledDashboardPage'
import './DashboardPage.scss'


export const DashboardPage = () => {
    return (
        <Wrapp>
            <div className="sidebar-wrapp">
                <Sidebar />
                <MainDash />
            </div>
        </Wrapp>
    )
}

export default DashboardPage
