import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Container, Drawer } from '@mui/material';
import {
	BoxCategory,
	LinkItem,
	Logo,
	ContainerWrapper,
	ContentWrapper,
	ButtonItem,
	BoxTechnical,
	ButtonGroup,
	WrappContainer,
	TitleShoppingBag,
	ButtonWrapp,
	ButtonElem,
} from './StyledHeader';

import { useState } from 'react';

function Header() {
	const [isShoppingBag, setIsShoppingBag] = useState(false);

	return (
		<ContainerWrapper>
			<Container maxWidth="lg">
				<ContentWrapper>
					<BoxCategory>
						<LinkItem to="/store/man">MAN</LinkItem>
						<LinkItem to="/store/women">WOMEN</LinkItem>
						<LinkItem to="/store/accessory">ACCESSORY</LinkItem>
					</BoxCategory>
					<div>
						<Logo to="/">Originalité</Logo>
					</div>

					<BoxTechnical>
						<ButtonGroup>
							<SearchOutlinedIcon sx={{ mr: 0.8 }} fontSize="medium" />
							<ButtonItem to="/">Search</ButtonItem>
						</ButtonGroup>
						<ButtonGroup>
							<PermIdentityOutlinedIcon sx={{ mr: 0.8 }} fontSize="medium" />
							<ButtonItem to="/account/profile">My account</ButtonItem>
						</ButtonGroup>
						<ButtonGroup>
							<ShoppingBagOutlinedIcon sx={{ mr: 0.8 }} fontSize="medium" />
							<ButtonItem onClick={() => setIsShoppingBag(true)} to="/">
								Shopping Bag
							</ButtonItem>
						</ButtonGroup>
					</BoxTechnical>
				</ContentWrapper>

				<Drawer anchor="right" open={isShoppingBag} onClose={() => setIsShoppingBag(false)}>
					<WrappContainer>
						<TitleShoppingBag>Shopping Bag</TitleShoppingBag>
						<ButtonWrapp>
							<ButtonElem>Basket</ButtonElem>
						</ButtonWrapp>
					</WrappContainer>
				</Drawer>
			</Container>
		</ContainerWrapper>
	);
}

export default Header;
