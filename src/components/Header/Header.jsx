import { BoxCategory, LinkItem, Logo, ContainerWrapp, BoxTechnical, TechnicalItem } from './StyledHeader';

function Header() {
	return (
		<ContainerWrapp>
			<BoxCategory>
				<LinkItem>MAN</LinkItem>
				<LinkItem>WOMAN</LinkItem>
				<LinkItem>ACCESSORY</LinkItem>
			</BoxCategory>
			<div>
				<Logo>Originalité</Logo>
			</div>
			<BoxTechnical>
				<TechnicalItem>Search</TechnicalItem>
				<TechnicalItem>My account</TechnicalItem>
				<TechnicalItem>Shopping Bag</TechnicalItem>
			</BoxTechnical>
		</ContainerWrapp>
	);
}

export default Header;
