import { Drawer } from '@mui/material';

import { WrappContainer, ButtonShoppingBag } from './StyledShoppingBag';

function ShoppingBag({ isShoppingBag, closeShoppingBag }) {
	return (
		<Drawer anchor="right" open={isShoppingBag} onClose={() => closeShoppingBag()}>
			<WrappContainer>
				<h3>Shopping Bag</h3>
				<ButtonShoppingBag onClick={() => closeShoppingBag()} to="/shopping-cart">
					Basket
				</ButtonShoppingBag>
			</WrappContainer>
		</Drawer>
	);
}

export default ShoppingBag;
