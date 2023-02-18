import { Categories, StyledLink } from './StyledMenMenu';
import { Container } from '@mui/material';
import { AnimateMenu, ContentWrap } from '../../StyledHeader';

function ManMenu({ active }) {
	const data = [
		{ title: 'New arrival', link: '/' },
		{ title: 'Shirts', link: '/' },
		{ title: 'Coats', link: '/' },
		{ title: 'Jackets', link: '/' },
		{ title: 'Sweaters', link: '/' },
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

export default ManMenu;

ManMenu.defaultProps = {
	height: 0,
};
