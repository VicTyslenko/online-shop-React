import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Container } from '@mui/material';

import Search from './components/Search';
import ShoppingBag from './components/ShoppingBag';
import ManMenu from './components/ManMenu';
import WomanMenu from './components/WomenMenu';
import Accessory from './components/Accessory';

import {
	LinkItem,
	Logo,
	ContainerWrapper,
	ContentWrapper,
	ButtonItem,
	BoxTechnical,
	ButtonGroup,
} from './StyledHeader';

import { useState } from 'react';

function Header() {
	const [isShoppingBag, setIsShoppingBag] = useState(false);
	const [searchInput, setSearchInput] = useState(0);
	const [mensList, setMensList] = useState(0);
	const [womesList, setWomensList] = useState(0);
	const [isAccessory, setIsAccessory] = useState(0);

	return (
		<ContainerWrapper>
			<Container maxWidth="lg">
				<ContentWrapper>
					<div>
						<LinkItem
							to="/"
							aria-expanded={mensList !== 0}
							aria-controls="example-panel"
							onClick={() => setMensList(mensList === 0 ? 'auto' : 0)}
						>
							MAN
						</LinkItem>
						<LinkItem
							to="/"
							aria-expanded={womesList !== 0}
							aria-controls="example-panel"
							onClick={() => setWomensList(womesList === 0 ? 'auto' : 0)}
						>
							WOMEN
						</LinkItem>
						<LinkItem
							to="/"
							aria-expanded={isAccessory !== 0}
							aria-controls="example-panel"
							onClick={() => setIsAccessory(isAccessory === 0 ? 'auto' : 0)}
						>
							ACCESSORY
						</LinkItem>
					</div>
					<div>
						<Logo to="/">Originalité</Logo>
					</div>
					<BoxTechnical>
						<ButtonGroup
							aria-expanded={searchInput !== 0}
							aria-controls="example-panel"
							onClick={() => setSearchInput(searchInput === 0 ? 240 : 0)}
						>
							<SearchOutlinedIcon sx={{ mr: 0.8 }} fontSize="medium" />
							<ButtonItem to="/">Search</ButtonItem>
						</ButtonGroup>
						<ButtonGroup>
							<PermIdentityOutlinedIcon sx={{ mr: 0.8 }} fontSize="medium" />
							<ButtonItem to="/account/profile">My account</ButtonItem>
						</ButtonGroup>
						<ButtonGroup onClick={() => setIsShoppingBag(true)}>
							<ShoppingBagOutlinedIcon sx={{ mr: 0.8 }} fontSize="medium" />
							<ButtonItem to="/">Shopping Bag</ButtonItem>
						</ButtonGroup>
					</BoxTechnical>
				</ContentWrapper>

				<ManMenu mensList={mensList} closeManMenu={() => setMensList(0)} />
				<WomanMenu womesList={womesList} />
				<Accessory isAccessory={isAccessory} />

				<Search searchInput={searchInput} />

				<ShoppingBag isShoppingBag={isShoppingBag} closeShoppingBag={() => setIsShoppingBag(false)} />
			</Container>
		</ContainerWrapper>
	);
}

export default Header;
