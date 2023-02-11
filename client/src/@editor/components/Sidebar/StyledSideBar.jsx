import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarWrapp = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 50px;
	gap: 60px;
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
