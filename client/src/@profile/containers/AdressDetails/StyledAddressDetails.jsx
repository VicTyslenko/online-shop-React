import styled from 'styled-components';
import { Button } from '@mui/material';

export const StyledButton = styled(Button)`
	&&& {
		margin-top: 3rem;
		background-color: black;
		color: white;
		text-transform: uppercase;
		padding: 1rem 0 1rem 0;
	}
`;
export const Title = styled.h1`
	margin: 0 0 40px 0;
	font-size: 12px;
	text-align: center;
	text-transform: uppercase;
`;

export const ContentForm = styled.div`
	max-width: 500px;
	margin-top: 5rem;
	margin-bottom: 5rem;
	& .button-wrapp {
		display: flex;
		justify-content: center;
	}
`;
