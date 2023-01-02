import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	align-items: center;
	// justify-items: center;
	column-gap: 3rem;
	row-gap: 4rem;
`;

export const StyledBoxMobile = styled(Box)`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	align-items: center;
	justify-items: center;
	column-gap: 1.5rem;
	row-gap: 2rem;
`;

export const StyledTitle = styled(Box)`
	margin-top: 1rem;
	margin-bottom: 1rem;
	// margin-left: 2rem;
`;
