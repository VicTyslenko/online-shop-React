import { StyledLink, Title, ContentAccessory, Categories } from './StyledAccessory';
import { AnimateMenu } from '../../StyledHeader';

function Accessory({ isAccessory }) {
	return (
		<AnimateMenu id="example-panel" duration={700} height={isAccessory}>
			<Categories>Categories</Categories>
			<ContentAccessory>
				<div>
					<Title>For woman</Title>
					<StyledLink to="/">Bags</StyledLink>
					<StyledLink to="/">Wallets</StyledLink>
					<StyledLink to="/">Belts</StyledLink>
					<StyledLink to="/">Scarves and hats</StyledLink>
					<StyledLink to="/">Sunglasses</StyledLink>
				</div>
				<div>
					<Title>For Man</Title>
					<StyledLink to="/">Bags</StyledLink>
					<StyledLink to="/">Wallets, Card cases</StyledLink>
					<StyledLink to="/">Belts</StyledLink>
					<StyledLink to="/">Ties and Cummerbunds</StyledLink>
					<StyledLink to="/">Sunglasses</StyledLink>
				</div>
			</ContentAccessory>
		</AnimateMenu>
	);
}

export default Accessory;
