import {  Wrapp,MenuList } from './StyledAddressBookHeader';
import { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

  
  
  
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
	}
	return (
		<Wrapp>
			
				<TabContext value={value}>
			 <TabList onChange={handleChange}>
        		<Tab  label="My profile" value="1"/>
      	 	    <Tab  label="My wishlist"  value="2"/>
     	  		<Tab label="Purchase history" value="3" />
				<Tab  label="Address book" value="4" />
      		 </TabList>
		<TabPanel value="1">My profile</TabPanel>
        <TabPanel value="2">My wishlist</TabPanel>
        <TabPanel value="3">Purchase history</TabPanel>
		<TabPanel value="4">Address book</TabPanel>
			   </TabContext>
			  



			{/* <h1 className="title">My account</h1>
			<MenuList>
				<StyledLink to="/profile">My profile</StyledLink>
				<StyledLink to="/wishlist">My wishlist</StyledLink>
				<StyledLink to="/purchase">Purchase history</StyledLink>
				<StyledLink to="/address">Address book</StyledLink>
			</MenuList> */}
		</Wrapp>
	);
}

export default AddressBookHeader;
