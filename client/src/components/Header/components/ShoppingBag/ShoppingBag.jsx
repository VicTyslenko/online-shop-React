import { Drawer } from '@mui/material';
import EmptyCart from '../../../../@main/containers/ShoppingCart/EmptyCart/EmptyCart';
import { WrappContainer, ButtonShoppingBag } from './StyledShoppingBag';
import { Fragment } from 'react';
function ShoppingBag({ isShoppingBag, closeShoppingBag }, ShoppingBagData) {
	const isNotData = ShoppingBagData.length === 0;
	return (
		<Fragment>
			{isNotData ? (
				<Drawer anchor="right" open={isShoppingBag} onClose={() => closeShoppingBag()}>
					<WrappContainer>
						<h3>Shopping Bag</h3>
						<ButtonShoppingBag onClick={() => closeShoppingBag()} to="/shopping-cart">
							Basket
						</ButtonShoppingBag>
					</WrappContainer>
				</Drawer>
			) : (
				<Drawer anchor="right" open={isShoppingBag} onClose={() => closeShoppingBag()}>
					<WrappContainer>
						<EmptyCart />
					</WrappContainer>
				</Drawer>
			)}
		</Fragment>
	);
}
ShoppingBag.defaultProps = { ShoppingBagData: [] };
export default ShoppingBag;
