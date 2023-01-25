import styled from 'styled-components';
import { Button } from '@mui/material';

export const FlexWrapp = styled.div`
	display: flex;
	align-items: center;
	gap: 48px;
`;
export const StyledButton = styled(Button)`
	&&& {
		background-color: black;
		color: white;
		width: 100%;

		height: fit-content;
	}
	& .content {
		text-align: left;
	}
	& .title {
		font-weight: 700;
		font-size: 24px;
		line-height: 24px;
		font-family: 'Josefin Sans';
	}
	& .description {
		font-weight: 400;
		font-size: 18px;
		line-height: 25px;
		font-family: 'Open Sans';
	}
`;
