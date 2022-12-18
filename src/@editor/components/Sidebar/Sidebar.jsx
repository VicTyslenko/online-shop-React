import React from 'react'
import { useState } from 'react'
// import { AiTwotoneHome } from 'react-icons/ai'
import { SidebarData } from '../../helpers/Data'
import { UilSignOutAlt } from '@iconscout/react-unicons'
import { Menu, SidebarItem, SidebarWrapp, Logo, MenuItem } from './StyledSideBar';
// import * as Unicons from '@iconscout/react-unicons';
// import Logo from '../img/logo_sidebar';
import Management from "./components/Management";


const Sidebar = () => {

    const [selected, setSelected] = useState(0);
    return (
        <SidebarWrapp>
            <Logo>
                {/* <img src={Logo} alt="" /> */}
                <h2 className="logo-title">Shops</h2>
            </Logo>
            <Menu>
                {SidebarData.map((item, index) => {
                    return (
                        <SidebarItem to={item.heading !== "Dashboard" ? `${item.heading}` : ""} className={selected === index ? 'active' : ''}
                            key={index}
                            onClick={() => {
                                setSelected(index)
                            }}
                        >
                            <item.icon fontSize={24} />
                            <span>{item.heading}</span>
                        </SidebarItem>
                    )
                })}
				<Management/>
                <MenuItem>
                    <UilSignOutAlt />
                </MenuItem>
            </Menu>
        </SidebarWrapp>
    )
}

export default Sidebar
