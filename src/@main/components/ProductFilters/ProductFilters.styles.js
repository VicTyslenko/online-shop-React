import { Box, ListItemIcon, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)`
	max-width: 300px;
	width: 100%;
	box-sizing: border-box;
	padding: 30px 20px 30px 40px;
	background: #000;
	color: #fff;

	${(props) => props.theme.breakpoints.down('lg')} {
		max-width: 250px;
		padding: 30px 10px 30px 20px;
	}

	${(props) => props.theme.breakpoints.down('md')} {
		max-width: 180px;
		padding: 30px 10px 30px 20px;
	}
`;

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

export const DividerStyled = styled(Divider)`
	width: 58px;
	border-bottom: 1px solid #fff;
	margin-left: 32px;
`;
