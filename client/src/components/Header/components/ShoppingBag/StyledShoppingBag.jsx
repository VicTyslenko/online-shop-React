import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WrappContainer = styled.div`
	width: 360px;

	& h3 {
		text-align: center;
	}
`;

export const ButtonShoppingBag = styled(Link)`
	position: absolute;
	left: 60px;
	bottom: 33px;
	font-size: 15px;
	font-style: normal;
	padding: 10px 30px;
	color: #fafafa;
	background: #160e05;
	border: none;
	border-radius: 30px;
	outline: none;
	margin: 6px;
	cursor: pointer;
	transition: 0.5s;
	letter-spacing: 0.8px;
	text-decoration: none;

	&:hover {
		background: #434342;
	}
`;
