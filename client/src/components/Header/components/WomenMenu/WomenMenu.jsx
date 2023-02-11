import { StyledLink } from './StyledWomenMenu';
import { AnimateMenu, ContentWrap } from '../../StyledHeader';

function WomanMenu({ womesList }) {
	return (
		<AnimateMenu id="example-panel" duration={700} height={womesList}>
			<ContentWrap>
				<h3>Categories</h3>
				<StyledLink to="/">New arrivals</StyledLink>
				<StyledLink to="/">Dresses</StyledLink>
				<StyledLink to="/">Knitwear</StyledLink>
				<StyledLink to="/">Jeans </StyledLink>
				<StyledLink to="/">Suits & Combined</StyledLink>
			</ContentWrap>
		</AnimateMenu>
	);
}

export default WomanMenu;
