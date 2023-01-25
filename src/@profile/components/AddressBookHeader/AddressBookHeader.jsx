/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { MenuList, StyledLink, Wrapp } from './StyledAddressBookHeader';

function AddressBookHeader() {
	return (
		<Wrapp>
			<h1 className="title">My account</h1>
			<MenuList>
				<StyledLink to="/profile">My profile</StyledLink>
				<StyledLink to="/wishlist">My wishlist</StyledLink>
				<StyledLink to="/purchase">Purchase history</StyledLink>
				<StyledLink to="/address">Address book</StyledLink>
			</MenuList>
		</Wrapp>
	);
}

export default AddressBookHeader;
