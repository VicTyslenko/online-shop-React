import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuList = styled.ul`
	display: flex;
	justify-content: space-around;
	align-items: center;
`;
export const StyledLink = styled(Link)`
	text-decoration: none;
	color: #828080;
	font-weight: 400;
	font-size: 24px;
	line-height: 33px;
	font-family: 'Open Sans', sans-serif;
	margin:25px

`;
export const Wrapp = styled.div`
	& .title {
		margin-bottom: 50px;
		font-weight: 700;
		font-size: 36px;
		line-height: 36px;
		font-family: 'Josefin Sans', sans-serif;
	
	}
`;
