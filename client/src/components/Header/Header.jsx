import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Container } from '@mui/material';
import { BoxCategory, LinkItem, Logo, ContainerWrapper, ContentWrapper, ButtonItem, BoxTechnical, ButtonGroup } from './StyledHeader';

function Header() {
	return (
		<ContainerWrapper>
			<Container maxWidth='lg'>
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
							<ButtonItem to="/">Shopping Bag</ButtonItem>
						</ButtonGroup>
					</BoxTechnical>
				</ContentWrapper>
			</Container>
		</ContainerWrapper>
	);
}

export default Header;
