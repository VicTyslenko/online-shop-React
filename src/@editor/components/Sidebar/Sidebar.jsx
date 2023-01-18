// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { SidebarData } from '../../helpers/Data';

import { Menu, SidebarItem, SidebarWrapp, Logo, MenuItem } from './StyledSideBar';

import Management from './components/Management';

function Sidebar() {
	const [selected, setSelected] = useState(0);
	return (
		<SidebarWrapp>
			<Logo>
				<h2 className="logo-title">Shops</h2>
			</Logo>
			<Menu>
				{SidebarData.map((item, index) => (
					<SidebarItem
						to={item.heading !== 'Dashboard' ? `${item.heading}` : ''}
						className={selected === index ? 'active' : ''}
						// eslint-disable-next-line react/no-array-index-key
						key={index}
						onClick={() => {
							setSelected(index);
						}}
					>
						<item.icon />
						<span>{item.heading}</span>
					</SidebarItem>
				))}
				<Management />
				<MenuItem>
					<ArrowCircleRightOutlinedIcon />
				</MenuItem>
			</Menu>
		</SidebarWrapp>
	);
}

export default Sidebar;
