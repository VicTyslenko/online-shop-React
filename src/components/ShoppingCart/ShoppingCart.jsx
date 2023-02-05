import React from 'react';
import { Container } from '@mui/system';
import {  ShoppingCartWrapp, StyledButton, LeftSideWrapp, Content,RightSideWrapp } from './StyledShoppingCart';


  const products = [

		{
			id: '1',
			name: 'Black Jaket',
			price: 1400,
			image: 'https://picsum.photos/id/21/3008/2008',
			color: 'black',
			size: 'M',
		},
		{
			id: '2',
			name: 'Evening dress',
			price: 2400,
			image: 'https://picsum.photos/id/180/2400/1600',
			color: 'red',
			size: 'XL',
		},
		{
			id: '3',
			name: 'W Shoes',
			price: 1000,
			image: 'https://picsum.photos/id/180/2400/1600',
			color: 'yellow',
			size: 'L',
		},
	];



function ShoppingCart() {
	return (
		<Container maxWidth='lg'sx={{
			marginBottom:'100px'
		}}>
				<StyledButton>Keep shopping</StyledButton>
			<ShoppingCartWrapp>
				<LeftSideWrapp>
					<Content>
						<div className="image-wrapp">
							<img className="image" src="../../../img/dress3.jpg" alt="" />
						</div>
						<ul className='list'>
							<li className="title">Summer dress</li>
							<li>Color:black</li>
							<li>Size:8</li>
							<li>Quantity</li>
							<li>price: 420$</li>
							<li>Total</li>
						</ul>
					</Content>
					<Content>
						<div className="image-wrapp">
							<img className="image" src="../../../img/dress5.jpg" alt="" />
						</div>
						<ul className='list'>
							<li className="title">Yellow dress</li>
							<li>Color:black</li>
							<li>Size:8</li>
							<li>Quantity</li>
							<li>price: 420$</li>
							<li>Total</li>
						</ul>
					</Content>
				</LeftSideWrapp>
				<RightSideWrapp>
					<div>hello</div>
				</RightSideWrapp>
			</ShoppingCartWrapp>
		</Container>
	);
}

export default ShoppingCart;

// {products.map(({ name, color, size, price, image }, index) => {
// 	<Content key={index}>
// 		<div className="image-wrapp">
// 			<img src={image} alt="" />
// 		</div>
// 		<div className="list">
// 			<p className="title">{name}</p>
// 			<ul>
// 				<li>{color}</li>
// 				<li>{size}</li>
// 				<li>{price}</li>
// 			</ul>
// 		</div>
// 	</Content>;
// })}
