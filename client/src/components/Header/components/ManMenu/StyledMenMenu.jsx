import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
	&&& {
		margin-bottom: 40px;
		color: white;
		font-weight: 400;
		font-size: 18px;
		line-height: 25px;
		font-family: 'Open Sans', sans-serif;
		display: block;
		cursor: pointer;
		text-decoration: none;
	}
`;
