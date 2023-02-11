// import AddressBookWrapper from './StyledAddressBook';
import { Container } from '@mui/material';
import AddressBookHeader from '../../containers/AddressBookHeader/AddressBookHeader';
import AddressBookMain from '../../components/AddressBookMain/AddressBookMain';
import { ContainerWrapper } from './StyledAddressBook';
function AddressBook() {
	return (
		<ContainerWrapper>
		<Container maxWidth='lg'sx={{
			marginBottom:'50px'
		}}>
			<AddressBookHeader />
			<AddressBookMain />
		</Container>
		</ContainerWrapper>
	);
}

export default AddressBook;
