import styled from 'styled-components';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import AnimateHeight from 'react-animate-height';

export const ContainerWrapper = styled.div`
	background: #000000;
`;

export const ContentWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
	justify-content: space-around;
`;

export const LinkItem = styled(Link)`
	text-decoration: none;
	font-weight: 400;
	font-size: 20px;
	line-height: 20px;
	color: #ffffff;

	&:hover {
		border-bottom: 1px solid #ffffff;
	}

	&:not(:last-child) {
		margin-right: 22px;
	}
`;

export const Logo = styled(Link)`
	text-decoration: none;
	font-family: 'Sofia';
	font-weight: 400;
	font-size: 56px;
	line-height: 88px;
	color: #ffffff;
	display: inline-block;
`;

export const BoxTechnical = styled(Box)`
	display: flex;
`;

export const ButtonGroup = styled.div`
	display: flex;
	align-items: center;
	color: #c4c4c4;
	cursor: pointer;

	&:not(:last-child) {
		margin-right: 25px;
	}
`;

export const ButtonItem = styled(Link)`
	text-decoration: none;
	font-family: 'Josefin Sans';
	font-weight: 400;
	font-size: 16px;
	line-height: 20px;
	color: #c4c4c4;

	&:hover {
		border-bottom: 1px solid #c4c4c4;
	}
`;

export const AnimateMenu = styled(AnimateHeight)`
	position: absolute;
	width: 100%;
	z-index: 3;
	background-color: #000;
`;

export const ContentWrap = styled(Box)`
	padding: 30px 42px 60px;

	& h3 {
		color: white;
		font-weight: 600;
		font-size: 20px;
		line-height: 27px;
		font-family: 'Open Sans', sans-serif;
		margin-bottom: 60px;
		text-transform: uppercase;
	}
`;
