import React from 'react'
import './Sidebar.scss'
import { AiTwotoneHome } from 'react-icons/ai'
import { SidebarData } from '../../Data/Data'
// import * as Unicons from '@iconscout/react-unicons';
// import Logo from '../img/logo_sidebar';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="logo">
                {/* <img src={Logo} alt="" /> */}
                <h2 className="logo-title">Shops</h2>
            </div>
            {/* menu */}
            <div className="menu">
                {SidebarData.map((item, index) => {
                    return (
                        <div className="menu-item">
                            <item.icon />
                            <span>{item.heading}</span>
                        </div>
                    )
                })}
                {/* <div className="menu-item">
                    <div className=""><AiTwotoneHome /></div>
                    <span>Dashboard</span>
                </div> */}
            </div>
        </div>
    )
}

export default Sidebar