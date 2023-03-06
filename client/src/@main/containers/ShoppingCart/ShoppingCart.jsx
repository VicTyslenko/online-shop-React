import React from 'react';
import { Container } from '@mui/system';
// import { useState } from 'react';
import { cartSelector } from '../../store/selectors/cartSelector';
import {useSelector,useDispatch} from 'react-redux'
import {isAuthSelector} from '../../store/selectors/authSelector'
// import {addProductToCart} from '../../store/actions/cartActions'
import {deleteProductFromCart} from "../../store/actions/cartActions"
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
	const cart = useSelector(cartSelector);
	const dispatch =useDispatch();
	return (
		<ContainerWrapper >
			{ isAuthSelector (
				<Container
					maxWidth="lg"
					sx={{
						marginBottom: '50px',
						marginTop: '40px',
					}}
				>
				 {cart ? (cart.map(({name,sizes,colors,imageUrls,currentPrice},_id)=>(
					// <StyledButton>Keep shopping</StyledButton>
					<ShoppingCartWrapp>
						<LeftSideWrapp>
								<ContentWrapp>
									<Content key={_id}>
										<div className="image-wrapp">
											<img className="image" src={imageUrls} alt="" />
										</div>
										<ul className="list">
											<li className="title">{name}</li>
											<li>Color :{colors}</li>
											<li>Size :{sizes}</li>
											{/* <li>
												Quantity :{' '}
												<button onClick={()=> dispatch(incrementQuantity(id))} className="qnt-btn">
													{' '}
													-{' '}
												</button>
												<span>{quantity}</span>
												<button onClick={()=> dispatch(decrementQuantity(id))} className="qnt-btn">
													{' '}
													+{' '}
												</button>
											</li> */}
											<li>Price :{currentPrice}</li>
											<li className="total">Total :</li>
										</ul>
									</Content>
									<RemoveButton onClick={()=>dispatch(deleteProductFromCart)}>Remove from basket</RemoveButton>
								</ContentWrapp>
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
				 ))
				 ) : <Container
				 maxWidth="lg"
				 sx={{
					 display: 'flex',
					 flexDirection: 'column',
					 alignItems: 'center',
				 }}
			 >
				 <EmptyCart />
			 </Container>
				
				}
					
				</Container>
			)}

		</ContainerWrapper>
	);
}
// ShoppingCart.defaultProps = { shoppingData: [] };

export default ShoppingCart;
