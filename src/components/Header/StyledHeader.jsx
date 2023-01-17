import styled from 'styled-components';
import { Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';

export const ContainerWrapp = styled(Container)`
	&&& {
		background: #000000;
		display: flex;
		align-items: center;
		margin-bottom: 20px;
		justify-content: space-around;
	}
`;

export const BoxCategory = styled(Box)``;

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
	/* font-family: 'Josefin Sans'; */
	font-weight: 400;
	font-size: 16px;
	line-height: 20px;
	color: #c4c4c4;

	&:hover {
		border-bottom: 1px solid #c4c4c4;
	}
`;
