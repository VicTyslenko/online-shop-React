import { StyledLink, Title, ContentAccessory, Categories, BlockCategory } from './StyledAccessory';
import { Container } from '@mui/material';
import { AnimateMenu, ContentWrap } from '../../StyledHeader';

function Accessory({ active }) {
	const dataWoman = [
		{ title: 'Bags', link: '/' },
		{ title: 'Wallets', link: '/' },
		{ title: 'Belts', link: '/' },
		{ title: 'Scarves and hats', link: '/' },
		{ title: 'Sunglasses', link: '/' },
	];
	const dataMan = [
		{ title: 'Bags', link: '/' },
		{ title: 'Wallets, Card cases', link: '/' },
		{ title: 'Belts', link: '/' },
		{ title: 'Ties and Cummerbunds', link: '/' },
		{ title: 'Sunglasses', link: '/' },
	];

	return (
		<AnimateMenu id="example-panel" duration={700} height={active}>
			<Container maxWidth="lg">
				<ContentWrap>
					<Categories>Categories</Categories>
					<ContentAccessory>
						<BlockCategory>
							<Title>For woman</Title>
							{dataWoman.map((item) => (
								<StyledLink key={item.title} to={item.link}>
									{item.title}
								</StyledLink>
							))}
						</BlockCategory>
						<BlockCategory>
							<Title>For Man</Title>
							{dataMan.map((item) => (
								<StyledLink key={item.title} to={item.link}>
									{item.title}
								</StyledLink>
							))}
						</BlockCategory>
					</ContentAccessory>
				</ContentWrap>
			</Container>
		</AnimateMenu>
	);
}

export default Accessory;

Accessory.defaultProps = {
	height: 0,
};
