import React from 'react';
import { Container } from '@mui/system';
import { useState } from 'react';
import EmptyCart from '../ShoppingCart/EmptyCart/EmptyCart';
import { cartSelector } from '../../store/selectors/cartSelector';
import {
	ShoppingCartWrapp,
	ContainerWrapper,
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
	const data = useSelector(cartSelector);
	console.log(data);
	// data === shoppingData.length === 0;
	
	const [quantity, setQuantity] = useState(1);

	const Decrement = () => {
		if (quantity <= 1) {
			return;
		}
		setQuantity((prevCount) => prevCount - 1);
	};
	const Increment = () => {
		if (quantity >= 10) {
			return;
		}
		setQuantity((prevCount) => prevCount + 1);
	};
	return (
		<ContainerWrapper>
			{!data && (
				<Container
					maxWidth="lg"
					sx={{
						marginBottom: '50px',
						marginTop: '40px',
					}}
				>
					<StyledButton>Keep shopping</StyledButton>
					<ShoppingCartWrapp>
						<LeftSideWrapp>
							{data.map((product) => (
								<ContentWrapp>
									<Content>
										<div className="image-wrapp">
											<img className="image" src={product.image} alt="" />
										</div>
										<ul className="list">
											<li className="title">{product.name}</li>
											<li>Color :{product.color}</li>
											<li>Size :{product.size}</li>
											<li>
												Quantity :{' '}
												<button onClick={Decrement} className="qnt-btn">
													{' '}
													-{' '}
												</button>
												<span>{quantity}</span>
												<button onClick={Increment} className="qnt-btn">
													{' '}
													+{' '}
												</button>
											</li>
											<li>Price :{product.price}</li>
											<li className="total">Total :</li>
										</ul>
									</Content>
									<RemoveButton>Remove from basket</RemoveButton>
								</ContentWrapp>
							))}
						</LeftSideWrapp>
						<RightSideWrapp>
							<h1 className="title">Shopping bag total</h1>
							<p className="discount">Add a discount code</p>
							<TextField id="standard-basic" variant="standard" />
							<hr className="line" />
							<p className="order">Order value :</p>
							<p className="order">Delivery</p>
							<p className="total">Total :</p>
							<div className="button-wrapp">
								<StyledButton>Checkout</StyledButton>
							</div>
						</RightSideWrapp>
					</ShoppingCartWrapp>
				</Container>
			)}

			{isNotData && (
				<Container
					maxWidth="lg"
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<EmptyCart />
				</Container>
			)}
		</ContainerWrapper>
	);
}
// ShoppingCart.defaultProps = { shoppingData: [] };

export default ShoppingCart;
