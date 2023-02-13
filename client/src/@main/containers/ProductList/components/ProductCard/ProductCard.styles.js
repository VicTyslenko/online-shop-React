import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ProductHeader = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 390px;
`;

export const StyledTitle = styled(Box)`
	max-height: 90px;
	text-overflow: ellipsis;
`;
