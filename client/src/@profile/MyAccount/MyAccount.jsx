import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Container } from '@mui/system';
import AddressBook from '../containers/AddressBook';
import MyProfile from '../containers/MyProfile';
import Wishlist from '../containers/Wishlist';
import PurchaseHistory from '../containers/PurchaseHistory';
import { MenuList, Title } from './StyledMyAccount';

function MyAccount() {
	const { pathname } = useLocation();

	const tabsAction = {
		'/account/profile/myAccount': 1,
		'/account/profile/tab-purchase': 3,
		'/account/profile/tab-wish': 2,
		'/account/profile/tab-address': 4,
	};
	// console.log(pathname);
	// console.log('pathname', tabsAction[pathname]);

	const [value, setValue] = useState('1');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<Container maxWidth="lg">
			<Title>My account</Title>
			<TabContext value={value}>
				<MenuList>
					<TabList onChange={handleChange}>
						<Tab className="list-item" label="My profile" value="1" />
						<Tab className="list-item" label="My wishlist" value="2" />
						<Tab className="list-item" label="Purchase history" value="3" />
						<Tab className="list-item" label="Address book" value="4" />
					</TabList>
				</MenuList>
				<TabPanel value="1">
					<MyProfile />
				</TabPanel>
				<TabPanel value="2">
					<Wishlist />
				</TabPanel>
				<TabPanel value="3">
					<PurchaseHistory />
				</TabPanel>
				<TabPanel value="4">
					<AddressBook />
				</TabPanel>
			</TabContext>
		</Container>
	);
}

export default MyAccount;

// можно сделать конфиг урлов и  вних обозначить profile: 1, wishlist: 2 .....

// и потом брать из роута параметр роута и сверять с номером что бы выставлять активный
