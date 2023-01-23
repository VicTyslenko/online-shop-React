/* eslint-disable import/no-unresolved */
import * as React from 'react';
// import { MdOutlineManageAccounts } from 'react-icons/md';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Collapse, List } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { LinkItem, ButtonItem, ListIcon, ManagementWrap, ListWrapManagement } from './StyledManagement';

export default function Management() {
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<ListWrapManagement sx={{ width: '100%' }} component="nav" aria-labelledby="nested-list-subheader">
			<ManagementWrap onClick={handleClick}>
				<ListIcon>
					{/* <MdOutlineManageAccounts fontSize={26} color="#000" /> */}
					<ManageAccountsIcon color="#000" />
				</ListIcon>
				<ButtonItem primary="Management" />
				{open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
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
