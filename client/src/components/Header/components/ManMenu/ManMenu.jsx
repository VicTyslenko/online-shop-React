import { StyledLink } from './StyledMenMenu';
import { AnimateMenu, ContentWrap } from '../../StyledHeader';

function ManMenu({ mensList, closeManMenu }) {
	return (
		<AnimateMenu id="example-panel" duration={700} height={mensList}>
			<ContentWrap>
				<h3>Categories</h3>
				<StyledLink to="/">New arrivals</StyledLink>
				<StyledLink to="/">Shirts</StyledLink>
				<StyledLink to="/">Coats</StyledLink>
				<StyledLink to="/">Jackets</StyledLink>
				<StyledLink to="/">Sweaters</StyledLink>
			</ContentWrap>
		</AnimateMenu>
	);
}

export default ManMenu;
