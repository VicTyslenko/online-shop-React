import * as React from 'react';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';
import {MdOutlineManageAccounts} from "react-icons/md"
import styled from "styled-components"

import {List, ListItemButton, ListItemText, Collapse, ListItemIcon} from '@mui/material';
// import {ExpandLess, ExpandMore} from '@mui/icons-material';



const LinkItem = styled(Link)`
	text-decoration: none;
	color: #000;
	padding: 8px 16px 8px 80px;
	display: inline-block;
`


export default function Management() {
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(!open);
	};


	return (
		<Box>
			<List
				sx={{width: '100%', maxWidth: 360}}
				component="nav"
				aria-labelledby="nested-list-subheader"
			>
				<ListItemButton onClick={handleClick}>
					<ListItemIcon><MdOutlineManageAccounts fontSize={26} color={"#000"}/></ListItemIcon>
					<ListItemText primary="Management"/>
					{/*{open ? <ExpandLess /> : <ExpandMore />}*/}
				</ListItemButton>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<LinkItem to="editing">
							<ListItemText primary="Editing"/>
						</LinkItem>
						<LinkItem to="roles">
							<ListItemText primary="Roles"/>
						</LinkItem>
						<LinkItem to="users">
							<ListItemText primary="Users"/>
						</LinkItem>
					</List>
				</Collapse>
			</List>

		</Box>
	);
}
