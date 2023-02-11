import { Categories, StyledLink } from './StyledWomenMenu';
import { Container } from '@mui/material';
import { AnimateMenu, ContentWrap } from '../../StyledHeader';

function WomanMenu({ active }) {
	const data = [
		{ title: 'New arrival', link: '/' },
		{ title: 'Dresses', link: '/' },
		{ title: 'Knitwear', link: '/' },
		{ title: 'Jeans', link: '/' },
		{ title: 'Suits & Combined', link: '/' },
	];

	return (
		<AnimateMenu id="example-panel" duration={700} height={active}>
			<Container maxWidth="lg">
				<ContentWrap>
					<Categories>Categories</Categories>
					{data.map((item) => (
						<StyledLink key={item.title} to={item.link}>
							{item.title}
						</StyledLink>
					))}
				</ContentWrap>
			</Container>
		</AnimateMenu>
	);
}

export default WomanMenu;

WomanMenu.defaultProps = {
	height: 0,
};
