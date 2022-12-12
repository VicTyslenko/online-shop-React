import React from 'react'
import './Sidebar.scss'
import { useState } from 'react'
import { AiTwotoneHome } from 'react-icons/ai'
import { SidebarData } from '../../Data/Data'
import { UilSignOutAlt } from '@iconscout/react-unicons'
// import * as Unicons from '@iconscout/react-unicons';
// import Logo from '../img/logo_sidebar';

const Sidebar = () => {

    const [selected, setSelected] = useState(0);
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
                        <div className={selected === index ? 'menu-item active' : 'menu-item'}
                            key={index}
                            onClick={() => {
                                setSelected(index)
                            }}
                        >
                            <item.icon />
                            <span>{item.heading}</span>
                        </div>
                    )
                })}
                <div className="menu-item">
                    <UilSignOutAlt />
                </div>
                {/* <div className="menu-item">
                    <div className=""><AiTwotoneHome /></div>
                    <span>Dashboard</span>
                </div> */}
            </div>
        </div>
    )
}

export default Sidebar