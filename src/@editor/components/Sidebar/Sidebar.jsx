import React from 'react'
import { useState } from 'react'
// import { AiTwotoneHome } from 'react-icons/ai'
import { SidebarData } from '../../helpers/Data/Data'
import { UilSignOutAlt } from '@iconscout/react-unicons'
import { SidebarItem } from './StyledSideBar';
import { SidebarWrapp } from './StyledSideBar';
import { Logo, MenuItem } from './StyledSideBar';
import { Menu } from './StyledSideBar';
// import * as Unicons from '@iconscout/react-unicons';
// import Logo from '../img/logo_sidebar';



const Sidebar = () => {

    const [selected, setSelected] = useState(0);
    return (
        <SidebarWrapp>
            <Logo>
                {/* <img src={Logo} alt="" /> */}
                <h2 className="logo-title">Shops</h2>
                {/* </div> */}
            </Logo>
            {/* menu */}
            <Menu>
                {SidebarData.map((item, index) => {
                    return (
                        <SidebarItem to={`${item.heading}`} className={selected === index ? 'active' : ''}
                            key={index}
                            onClick={() => {
                                setSelected(index)
                            }}
                        >
                            <item.icon fontSize={24}/>
                            <span>{item.heading}</span>
                        </SidebarItem>
                    )
                })}
                <MenuItem>
                    <UilSignOutAlt />
                </MenuItem>
                {/* <div className="menu-item">
                    <div className=""><AiTwotoneHome /></div>
                    <span>Dashboard</span>
                </div> */}
            </Menu>
        </SidebarWrapp>
    )
}

export default Sidebar
