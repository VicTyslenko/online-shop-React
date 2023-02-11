import { SidebarWrapp } from './StyledSideBar';
import { StyledLink } from './StyledSideBar';
function Sidebar() {
	return (
		<SidebarWrapp>
			<StyledLink to="/editor/products">products</StyledLink> <StyledLink to="/editor/shop">shop</StyledLink>
			<StyledLink to="/editor/users">users</StyledLink>
			<StyledLink to="/editor/style-shop">style-shop</StyledLink>
			<StyledLink to="/editor/orders">orders</StyledLink>
		</SidebarWrapp>
	);
}

export default Sidebar;
