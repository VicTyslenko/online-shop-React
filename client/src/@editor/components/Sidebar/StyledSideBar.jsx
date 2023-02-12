import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarWrapp = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 120px;
	/* height:100% ; */
	background-color: black;
	width: 200px;
`;

export const ButtonWrap = styled.div`
	padding-top: 16px;
	padding-bottom: 16px;
	display: flex;
	justify-content: left;
	align-items: center;
	margin-bottom: 20px;
	border-bottom: 1px solid #3c3c3c;
`;

export const StyledLink = styled(Link)`
	&&& {
		font-weight: 400;
		font-size: 16px;
		line-height: 20px;
		font-family: 'Josefin Sans';
		color: #ffffff;
		text-decoration: none;
		text-transform: uppercase;
	}
`;
