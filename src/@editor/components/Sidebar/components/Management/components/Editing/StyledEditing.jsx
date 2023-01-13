import styled from 'styled-components';
import { Button, Grid } from '@mui/material';

export const GridItem = styled(Grid)`
	&&& {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const ButtonItem = styled(Button)`
	&&& {
		font-size: 14px;
	}
`;

export const Title = styled.h1`
	text-align: center;
	margin-top: 26px;
	margin-bottom: 50px;
	font-size: 28px;
`;
