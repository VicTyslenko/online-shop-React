import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { BoxCategory, LinkItem, Logo, ContainerWrapp, ButtonItem, BoxTechnical, ButtonGroup } from './StyledHeader';

function Header() {
	return (
		<ContainerWrapp>
			<BoxCategory>
				<LinkItem href="/">MAN</LinkItem>
				<LinkItem href="/">WOMAN</LinkItem>
				<LinkItem href="/">ACCESSORY</LinkItem>
			</BoxCategory>
			<div>
				s<Logo>Originalité</Logo>
			</div>

			<BoxTechnical>
				<ButtonGroup>
					<SearchOutlinedIcon sx={{ mr: 0.8 }} fontSize="medium" />
					<ButtonItem href="/">Search</ButtonItem>
				</ButtonGroup>
				<ButtonGroup>
					<PermIdentityOutlinedIcon sx={{ mr: 0.8 }} fontSize="medium" />
					<ButtonItem href="/">My account</ButtonItem>
				</ButtonGroup>
				<ButtonGroup>
					<ShoppingBagOutlinedIcon sx={{ mr: 0.8 }} fontSize="medium" />
					<ButtonItem href="/">Shopping Bag</ButtonItem>
				</ButtonGroup>
			</BoxTechnical>
		</ContainerWrapp>
	);
}

export default Header;
