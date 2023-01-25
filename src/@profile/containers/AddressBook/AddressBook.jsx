/* eslint-disable import/no-unresolved */

// import AddressBookWrapper from './StyledAddressBook';
import { Container } from '@mui/material';
import AddressBookHeader from '../../components/AddressBookHeader/AddressBookHeader';
import AddressBookMain from '../../components/AddressBookMain/AddressBookMain';

function AddressBook() {
	return (
		<Container maxWidth='lg'sx={{
			marginBottom:'50px'
		}}>
			<AddressBookHeader />
			<AddressBookMain />
		</Container>
	);
}

export default AddressBook;
