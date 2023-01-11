import { Box, ListItemIcon } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ListItemIconColor = styled(ListItemIcon)`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ColorIcon = styled(Box)`
	width: 21px;
	height: 21px;
	border-radius: 50%;
	box-shadow: 0px 2px 4px rgba(119, 114, 114, 0.25);
	margin-bottom: 0.5rem;
`;
