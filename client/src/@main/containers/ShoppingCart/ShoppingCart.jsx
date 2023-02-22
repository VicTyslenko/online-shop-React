import React from 'react';
import { Container } from '@mui/system';
import { useState } from 'react';
import EmptyCart from '../ShoppingCart/EmptyCart/EmptyCart';
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
import TextField from '@mui/material/TextField';
const products = [
	{
		id: '1',
		name: 'Black Jaket',
		price: 1400,
		image: 'https://diadia.ua/image/catalog/slider/2022/IMG_9944.JPG',
		color: 'black',
		size: 'M',
	},
	{
		id: '2',
		name: 'Evening dress',
		price: 2400,
		image: 'https://diadia.ua/image/catalog/slider/2022/IMG_9944.JPG',
		color: 'red',
		size: 'XL',
	},
	{
		id: '3',
		name: 'W Shoes',
		price: 1000,
		image: 'https://diadia.ua/image/catalog/slider/2022/IMG_9944.JPG',
		color: 'yellow',
		size: 'L',
	},
];

function ShoppingCart() {
	
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
			{!isNotData && (
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
							{products.map((product) => (
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
ShoppingCart.defautProps = { shoppingData: [] };

export default ShoppingCart;
