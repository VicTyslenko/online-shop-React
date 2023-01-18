import styled from 'styled-components';
import { Button } from '@mui/material';

// eslint-disable-next-line import/prefer-default-export
export const ButtonItem = styled(Button)`
	&&& {
		background-color: #5e1d00;
		padding: 8px;
		grid-column: span 3;
		width: 100%;
	}
`;
