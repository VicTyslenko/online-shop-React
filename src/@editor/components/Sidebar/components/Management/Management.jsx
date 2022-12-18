import * as React from 'react';
import {MdOutlineManageAccounts} from "react-icons/md"

import {LinkItem, ButtonItem, ListIcon, ManagementWrap, ListWrapManagement} from "./StyledManagement"
import {Collapse, List} from '@mui/material';
import {MdExpandLess, MdExpandMore} from 'react-icons/md';



export default function Management() {
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(!open);
	};


	return (
		<ListWrapManagement
			sx={{width: '100%'}}
			component="nav"
			aria-labelledby="nested-list-subheader"
		>
			<ManagementWrap onClick={handleClick}>
				<ListIcon><MdOutlineManageAccounts fontSize={26} color={"#000"}/></ListIcon>
				<ButtonItem primary="Management"/>
				{open ? <MdExpandLess /> : <MdExpandMore />}
			</ManagementWrap>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<LinkItem to="editing">
						<span>Editing</span>
					</LinkItem>
					<LinkItem to="roles">
						<span>Roles</span>
					</LinkItem>
					<LinkItem to="users">
						<span>Users</span>
					</LinkItem>
				</List>
			</Collapse>
		</ListWrapManagement>
	);
}
