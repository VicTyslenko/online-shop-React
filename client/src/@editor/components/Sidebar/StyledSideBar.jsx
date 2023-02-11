import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarWrapp = styled.div`
	display: flex;
	flex-direction: column;
	/* margin-top: 50px; */
	padding:30px 0 30px 20px  ;
	gap: 60px;
	/* height:100% ; */
	background-color:black ;
`;

export const StyledLink = styled(Link)`
	&&& {
		font-weight: 400;
		font-size: 20px;
		line-height: 20px;
		font-family: 'Josefin Sans';
		color: #ffffff;
		text-decoration: none;
		text-transform: uppercase;
	}
`;
