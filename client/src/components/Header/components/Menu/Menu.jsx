import React, { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { Container } from '@mui/material';
import { MenuWrapp, FlexWrapp, StyledLink } from './StyledMenu';

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

							<StyledLink to="/">Bags</StyledLink>
							<StyledLink to="/">Wallets</StyledLink>
							<StyledLink to="/">Belts</StyledLink>
							<StyledLink to="/">Scarves and hats</StyledLink>
							<StyledLink to="/">Sunglasses</StyledLink>
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
							<StyledLink to={"/"}>Bags</StyledLink>
							<StyledLink to={"/"}>Wallets,Card cases</StyledLink>
							<StyledLink to={"/"}>Belts</StyledLink>
							<StyledLink to={"/"}>Ties and Cummerbunds</StyledLink>
							<StyledLink to={"/"}>Sunglasses</StyledLink>
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
