import React from 'react';
import { Container } from '@mui/system';
import { ShoppingCartWrapp, StyledButton, LeftSideWrapp, Content, RightSideWrapp } from './StyledShoppingCart';

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
	return (
		<Container
			maxWidth="lg"
			sx={{
				marginBottom: '100px',
			}}
		>
			<StyledButton>Keep shopping</StyledButton>
			<ShoppingCartWrapp>
				<LeftSideWrapp>
					{products.map((product) => (
						<Content>
							<div className="image-wrapp">
								<img className='image' src={product.image} alt="" />
							
							</div>
							<ul className="list">
								<li className="title">{product.name}</li>
								<li>Color :{product.color}</li>
								<li>Size :{product.size}</li>
								<li>Quantity</li>
								<li>Price :{product.price}</li>
								<li className='total'>Total :</li>
							</ul>
						</Content>
					))}
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

// import React from "react";
// import {Container} from "@mui/system";
// import {ShoppingCartWrapp, StyledButton, LeftSideWrapp, Content, RightSideWrapp} from './StyledShoppingCart';

// function ShoppingCart() {

// 	const products = [
// 		{
// 			id: '1',
// 			name: 'Black Jaket',
// 			price: 1400,
// 			image: 'https://picsum.photos/id/21/3008/2008',
// 			color: 'black',
// 			size: 'M',
// 		},
// 		{
// 			id: '2',
// 			name: 'Evening dress',
// 			price: 2400,
// 			image: 'https://picsum.photos/id/180/2400/1600',
// 			color: 'red',
// 			size: 'XL',
// 		},
// 		{
// 			id: '3',
// 			name: 'W Shoes',
// 			price: 1000,
// 			image: 'https://picsum.photos/id/180/2400/1600',
// 			color: 'yellow',
// 			size: 'L',
// 		},
// 	]
// 	return (
// 		<Container maxWidth='lg' sx={{
// 			marginBottom: '100px'
// 		}}>
// 			<StyledButton>Keep shopping</StyledButton>
// 			<ShoppingCartWrapp>
// 				<LeftSideWrapp>
// 					{products.map(({name, color, size, price, image}, index) => (
// 						<Content key={index}>
// 							<div className="image-wrapp">
// 								<img src={image} alt=""/>
// 							</div>
// 							<div className="list">
// 								<p className="title">{name}</p>
// 								<ul>
// 									<li>{color}</li>
// 									<li>{size}</li>
// 									<li>{price}</li>
// 								</ul>
// 							</div>
// 						</Content>
// 					))}

// 				</LeftSideWrapp>
// 				<RightSideWrapp>
// 					<div>hello</div>
// 				</RightSideWrapp>
// 			</ShoppingCartWrapp>
// 		</Container>
// 	)
// }

// export default ShoppingCart;
