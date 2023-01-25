import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarItem = styled(Link)`
	height: 2.5rem;
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-left: 2rem;
	position: relative;
	font-size: 14px;
	border-radius: 0.7rem;
	transition: all 300ms ease;
	color: #000;
	text-decoration: none;

	&:last-child {
		position: absolute;
		bottom: 20px;
		width: 100%;
	}

	&.active {
		background-color: rgb(22, 88, 141);
		margin-left: 0;
	}
`;
export const SidebarWrapp = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	padding-top: 4rem;
	transition: all 300ms ease;
	padding-left: 15px;
`;
export const Menu = styled.div`
	margin-top: 4rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;
export const Logo = styled.div`
	& .logo-title {
		color: #00525a;
	}
`;
export const MenuItem = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;
