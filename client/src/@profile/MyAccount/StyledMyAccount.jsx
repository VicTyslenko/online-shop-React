import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuList = styled.ul`
	display: flex;
	justify-content: space-around;
	gap:30px;
	align-items: center;
	& .list-item {
		font-weight: 400;
		font-size: 24px;
		line-height: 33px;
		color: #828080;
		font-family: 'Open Sans';
		text-transform:capitalize ;
	}
`;
export const Title = styled.h1`
	font-weight: 700;
	font-size: 36px;
	line-height: 36px;
	font-family: 'Josefin Sans';
	color: #000000;
	margin-bottom:50px;
`;

