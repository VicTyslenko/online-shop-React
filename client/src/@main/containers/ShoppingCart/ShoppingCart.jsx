import React from 'react';
import { Container } from '@mui/system';
import { cartDataSelect } from '../../store/selectors/cartSelector';
import { isAuthSelector } from '../../store/selectors/authSelector';
import { deleteProductFromCart } from '../../store/actions/cartActions';
import EmptyCart from '../ShoppingCart/EmptyCart/EmptyCart';
import {
	ShoppingCartWrapp,
	RemoveButton,
	StyledButton,
	LeftSideWrapp,
	Content,
	RightSideWrapp,
	ContentWrapp,
} from './StyledShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';

function ShoppingCart() {
	const dispatch = useDispatch();

	const cart = useSelector(cartDataSelect);
	console.log(cart);
	// const isAuth = useSelector(isAuthSelector);
	const productItem = cart?.map(({ product, color, size }) => (
		<ContentWrapp key={product._id}>
			<Content>
				<div className="image-wrapp">
					<img className="image" src={product.imageUrls[0]} alt="" />
				</div>
				<ul className="list">
					<li className="title">{product.name}</li>
					<li className="color">Color :{color}</li>
					<li className="size">Size : {size}</li>
					<li className="price">Price : {product.currentPrice} $ </li>
					<li className="total">Total :</li>
				</ul>
			</Content>
			<RemoveButton onClick={() => dispatch(deleteProductFromCart(product._id))}>Remove from basket</RemoveButton>
		</ContentWrapp>
	));
	// const checkout = cart?.map(({ product }) => (
	// 	<RightSideWrapp key={product._id}>
	// 		<h1 className="title">Shopping bag total</h1>
	// 		<p className="discount">Add a discount code</p>
	// 		<TextField id="standard-basic" variant="standard" />
	// 		<hr className="line" />
	// 		<p className="order">Order value :</p>
	// 		<p className="delivery">Delivery :</p>
	// 		<p className="order order-delivery">Delivery : {product.productDelivery}</p>
	// 		<p className="total">Total :</p>
	// 		<div className="button-wrapp">
	// 			<StyledButton>Checkout</StyledButton>
	// 		</div>
	// 	</RightSideWrapp>
	// ));
	return (
		<Container
			maxWidth="lg"
			sx={{
				marginBottom: '50px',
				marginTop: '40px',
			}}
		>
			{cart.length > 0 ? (
				<ShoppingCartWrapp>
					<LeftSideWrapp>{productItem}</LeftSideWrapp>
					<RightSideWrapp>
						<h1 className="title">Shopping bag total</h1>
						<p className="discount">Add a discount code</p>
						<TextField id="standard-basic" variant="standard" />
						<hr className="line" />
						<p className="order">Order value :</p>
						<p className="delivery">Delivery :</p>
						{/* <p className="order order-delivery">Delivery : {product.productDelivery}</p> */}
						<p className="total">Total :</p>
						<div className="button-wrapp">
							<StyledButton>Checkout</StyledButton>
						</div>
					</RightSideWrapp>
				</ShoppingCartWrapp>
			) : (
				<EmptyCart />
			)}
		</Container>
	);
}

export default ShoppingCart;
