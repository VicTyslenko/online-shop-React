import styled from 'styled-components';
import { Button } from '@mui/material';

const StyledButton = styled(Button)`
	&&& {
		background-color: black;
		padding: 12px 24px;
		font-weight: 400;
		/* font-size: 24px;
		line-height: 33px;
		max-width: 305px; */
	}
`;

export default StyledButton;
