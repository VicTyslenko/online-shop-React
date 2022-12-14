import React from 'react'
import { useState } from 'react'
// import { AiTwotoneHome } from 'react-icons/ai'
import { SidebarData } from '../../helpers/Data/Data'
import { UilSignOutAlt } from '@iconscout/react-unicons'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import './Sidebar.scss'
// import * as Unicons from '@iconscout/react-unicons';
// import Logo from '../img/logo_sidebar';


const SidebarItem = styled(Link)`
	height: 2.5rem;
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-left: 2rem;
	position: relative;
	font-size: 14px;
	border-radius: 0.7rem;
	transition: all 300ms ease;
	color: #000	;
	text-decoration: none;

	&:last-child {
		position: absolute;
		bottom: 20px;
		width: 100%;
	}

	&.active {
		background-color: rgb(22, 88, 141);
		margin-left: 0;
	}
`


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
