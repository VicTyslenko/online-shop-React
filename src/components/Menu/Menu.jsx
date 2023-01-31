/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { Container } from '@mui/material';
import { MenuWrapp, FlexWrapp, StyledLink } from './StyledMenu';

// eslint-disable-next-line no-unused-vars
// import React from 'react'

function Menu() {
	const [heightFirst, setHeightFirst] = useState(0);
	const [heightSecond, setHeightSecond] = useState(0);

	return (
		<Container
			maxWidth="lg"
			sx={{
				background: 'black',
				height: '100vh',
			}}
		>
			<MenuWrapp>
				<h1 className="title">Categories</h1>
				<FlexWrapp>
					<div className="width">
						<button
							aria-expanded={heightFirst !== 0}
							aria-controls="example-panel"
							onClick={() => setHeightFirst(heightFirst === 0 ? 'auto' : 0)}
						>
							{heightFirst === 0 ? 'For woman' : 'For woman'}
						</button>
						<AnimateHeight id="example-panel" duration={700} height={heightFirst}>
							{/* <p>Bags</p> */}

							<StyledLink>Bags3</StyledLink>
							<StyledLink>Wallets</StyledLink>
							<StyledLink>Belts</StyledLink>
							<StyledLink>Scarves and hats</StyledLink>
							<StyledLink>Sunglasses</StyledLink>
						</AnimateHeight>
					</div>

					<div className="width">
						<button
							aria-expanded={heightSecond !== 0}
							aria-controls="example-panel"
							onClick={() => setHeightSecond(heightSecond === 0 ? 'auto' : 0)}
						>
							{heightSecond === 0 ? 'For man' : 'For man'}
						</button>
						<AnimateHeight id="example-panel" duration={700} height={heightSecond}>
							<StyledLink>Bags3</StyledLink>
							<StyledLink>Wallets,Card cases</StyledLink>
							<StyledLink>Belts</StyledLink>
							<StyledLink>Ties and Cummerbunds</StyledLink>
							<StyledLink>Sunglasses</StyledLink>
						</AnimateHeight>
					</div>
				</FlexWrapp>
			</MenuWrapp>
		</Container>
	);
}

export default Menu;
{
	/* <StyledLink>Bags</StyledLink>
<StyledLink>Wallets</StyledLink>
<StyledLink>Belts</StyledLink>
<StyledLink>Scarves and hats</StyledLink>
<StyledLink>Sunglasses</StyledLink> */
}
