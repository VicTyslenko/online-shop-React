import { SidebarWrapp, StyledLink, ButtonWrap } from './StyledSideBar';

function Sidebar() {
	return (
		<SidebarWrapp>
			<ButtonWrap>
				<StyledLink to="/editor/dashboard/products">products</StyledLink>
			</ButtonWrap>
			<ButtonWrap>
				<StyledLink to="/editor/dashboard/shop">shop</StyledLink>
			</ButtonWrap>
			<ButtonWrap>
				<StyledLink to="/editor/dashboard/users">users</StyledLink>
			</ButtonWrap>
			<ButtonWrap>
				<StyledLink to="/editor/dashboard/style-shop">style-shop</StyledLink>
			</ButtonWrap>
			<ButtonWrap>
				<StyledLink to="/editor/dashboard/orders">orders</StyledLink>
			</ButtonWrap>
		</SidebarWrapp>
	);
}

export default Sidebar;
