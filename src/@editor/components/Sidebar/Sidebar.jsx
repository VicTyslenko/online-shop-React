import React from 'react';
import { useState } from 'react';
import { SidebarData } from '../../helpers/Data';

import  ArrowCircleRightOutlinedIcon  from '@mui/icons-material/ArrowCircleRightOutlined';
import { Menu, SidebarItem, SidebarWrapp, Logo, MenuItem } from './StyledSideBar';


import Management from './components/Management';

const Sidebar = () => {
	const [selected, setSelected] = useState(0);
	return (
		<SidebarWrapp>
			<Logo>
				<h2 className="logo-title">Shops</h2>
			</Logo>
			<Menu>
				{SidebarData.map((item, index) => {
					return (
						<SidebarItem
							to={item.heading !== 'Dashboard' ? `${item.heading}` : ''}
							className={selected === index ? 'active' : ''}
							key={index}
							onClick={() => {
								setSelected(index);
							}}
						>
							<item.icon />
							<span>{item.heading}</span>
						</SidebarItem>
					);
				})}
				<Management />
				<MenuItem>
					<ArrowCircleRightOutlinedIcon />
				</MenuItem>
			</Menu>
		</SidebarWrapp>
	);
};

export default Sidebar;
