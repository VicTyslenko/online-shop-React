import { React, useState, useEffect } from 'react';
import { Container } from '@mui/system';
import { cartDataSelect } from '../../store/selectors/cartSelector';
import { isAuthSelector } from '../../store/selectors/authSelector';
import { Link } from 'react-router-dom';
import { deleteProductFromCart } from '../../store/actions/cartActions';
import EmptyCart from '../ShoppingCart/EmptyCart/EmptyCart';
import {
	ShoppingCartWrapp,
	RemoveButton,
	StyledLink,
	LeftSideWrapp,
	Content,
	RightSideWrapp,
	ContentWrapp,
} from './StyledShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';

function ShoppingCart() {
	const dispatch = useDispatch();
	const [totalPrice, setTotalPrice] = useState(0);
	const [quantity, setQuantity] = useState(0);
	const cart = useSelector(cartDataSelect);
	const priceItem = cart.map(({ product }) => product.currentPrice);
	const decrease = () => {
		if (quantity > 0) {
			setQuantity(quantity - 1);
		} else {
			return;
		}
	};
	const increase = () => {
		if (quantity < 10) {
			setQuantity(quantity + 1);
		} else {
			return;
		}
	};
	useEffect(() => {
		setTotalPrice(priceItem.reduce((a, b) => a + b, 0));
	}, [cart]);
	// const isAuth = useSelector(isAuthSelector);
	const productItem = cart?.map(({ product, color, size }) => (
		<ContentWrapp key={product._id}>
			<Content>
				<div className="image-wrapp">
					<Link to={`/product/${product.itemNo}`}>
						<img className="image" src={product.imageUrls[0]} alt="" />
					</Link>
				</div>
				<ul className="list">
					<li className="title">{product.name}</li>
					<li className="color">Color : {color}</li>
					<li className="size">Size : {size}</li>
					<div className="btn-wrapp">
						<button className="btn-qnt" onClick={() => decrease()}>
							-
						</button>
						{quantity}
						<button className="btn-qnt" onClick={() => increase(product.currentPrice)}>
							+
						</button>
					</div>

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
						<p className="total">
							Total price: <span className="total-price">{totalPrice} $ </span>{' '}
						</p>
						<div className="button-wrapp">
							<StyledLink to={'/account/profile/address-details'}>Checkout</StyledLink>
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
