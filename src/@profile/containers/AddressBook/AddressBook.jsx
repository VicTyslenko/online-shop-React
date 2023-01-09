import AddressBookWrapper from './StyledAddressBook';
import AddressBookHeader from '../../components/AddressBookHeader/AddressBookHeader';
import AddressBookMain from '../../components/AddressBookMain/AddressBookMain';

function AddressBook() {
	return (
		<AddressBookWrapper>
			<AddressBookHeader />
			<AddressBookMain />
		</AddressBookWrapper>
	);
}

export default AddressBook;
