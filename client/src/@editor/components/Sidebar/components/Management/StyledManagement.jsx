import styled from 'styled-components';
import { ListItemText, ListItemIcon, ListItemButton, List } from '@mui/material';
import { Link } from 'react-router-dom';

export const ListWrapManagement = styled(List)`
	&&& {
		padding: 0;
	}
`;

export const ManagementWrap = styled(ListItemButton)`
	&&& {
		border-radius: 0.7rem;
		transition: all 300ms ease;
		padding: 4px 4px 4px 14px;
		margin-bottom: 8px;

		&:hover {
			background-color: rgb(22, 88, 141);
		}
	}
`;

export const LinkItem = styled(Link)`
	text-decoration: none;
	color: #000;
	padding: 10px 16px 10px 90px;
	border-radius: 0.7rem;
	transition: all 300ms ease;
	display: flex;
	align-items: center;
	margin-bottom: 8px;

	&:hover {
		background-color: rgb(22, 88, 141);
	}

	&&& {
		font-size: 15px;
	}
`;

export const ButtonItem = styled(ListItemText)`
	&&& {
		font-size: 10px;
		padding-left: 0;
	}
`;

export const ListIcon = styled(ListItemIcon)`
	position: relative;
	left: 16px;
`;
