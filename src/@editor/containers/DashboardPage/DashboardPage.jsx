import React from 'react'
import Sidebar from '../../components/Sidebar'
import MainDash from '../../components/MainDash'
import { Wrapp, SideBarWrapp } from './StyledDashboardPage'
import RightSide from '../../components/RightSide/RightSide'
import './DashboardPage.scss'


export const DashboardPage = () => {
    return (
        <Wrapp>
            <SideBarWrapp>
                <Sidebar />
                <MainDash />
                <RightSide />
            </SideBarWrapp>
        </Wrapp>
    )
}

export default DashboardPage
