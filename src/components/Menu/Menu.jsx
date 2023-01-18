/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { Container, MenuWrapp, FlexWrapp } from './StyledMenu';

// eslint-disable-next-line no-unused-vars
// import React from 'react'

function Menu() {
	const [heightFirst, setHeightFirst] = useState(0);
	const [heightSecond, setHeightSecond] = useState(0);

	return (
		<Container>
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
							<p>Bags</p>
							<p>Wallets</p>
							<p>Belts</p>
							<p>Scarves and hats</p>
							<p>Sunglasses</p>
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
							<p>Bags</p>
							<p>Wallets,Card cases</p>
							<p>Belts</p>
							<p>Ties and Cummerbunds</p>
							<p>Sunglasses</p>
						</AnimateHeight>
					</div>
				</FlexWrapp>
			</MenuWrapp>
		</Container>
	);
}

export default Menu;
