import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export const FlexWrapp = styled.div`
	display: flex;
	align-items: center;
	gap: 48px;
`;
export const StyledButton = styled(Link)`
	&&& {
		display: block;
		width: 100%;
		height: fit-content;
		background-color: black;
		text-decoration: none;
		color: white;
	}
	& .content {
		text-align: left;
	}
	& .title {
		font-weight: 700;
		font-size: 24px;
		line-height: 24px;
		font-family: 'Josefin Sans', sans-serif;
	}
	& .description {
		font-weight: 400;
		font-size: 18px;
		line-height: 25px;
		font-family: 'Open Sans', sans-serif;
	}
`;
