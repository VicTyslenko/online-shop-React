import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

export const Categories = styled.h3`
	color: white;
	font-weight: 600;
	font-size: 20px;
	line-height: 27px;
	font-family: 'Open Sans', sans-serif;
	margin-bottom: 50px;
	text-transform: uppercase;
	padding-top: 30px;
	padding-left: 44px;
`;

export const ContentAccessory = styled(Box)`
	padding-left: 42px;
	padding-bottom: 60px;
	display: flex;

	& div {
		padding-right: 240px;
	}
`;

export const Title = styled.h3`
	cursor: pointer;
	border: none;
	color: white;
	font-weight: 400;
	font-size: 18px;
	line-height: 25px;
	border-bottom: 1px solid white;
	margin-bottom: 60px;
	display: inline-block;
`;

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
