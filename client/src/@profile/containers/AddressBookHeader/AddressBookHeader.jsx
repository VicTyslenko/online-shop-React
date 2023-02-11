import { MenuList, Title } from './StyledAddressBookHeader';
import { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Container } from '@mui/system';
import MyProfile from '../MyProfile/MyProfile'
// function LinkTab(props) {
// 	return (
// 		<Tab
// 		component="a"
// 		onClick={(event) => {
// 		  event.preventDefault();
// 		}}
// 		{...props}
// 	  />
// 	);
//   }

function AddressBookHeader() {
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
				<TabPanel value="1"><MyProfile/></TabPanel>
				<TabPanel value="2">My wishlist</TabPanel>
				<TabPanel value="3">Purchase history</TabPanel>
				{/* <TabPanel value="4">Address book</TabPanel> */}
				{/* <TabPanel value="4">
					<AddressBook />
				</TabPanel> */}
			</TabContext>
		</Container>
	);
}

export default AddressBookHeader;
