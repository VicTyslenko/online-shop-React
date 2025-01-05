import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import { Container } from "@mui/system";
import { useState } from "react";

import AddressBook from "../containers/AddressBook";
import MyProfile from "../containers/MyProfile";
import PurchaseHistory from "../containers/PurchaseHistory";
import Wishlist from "../containers/Wishlist";
import { MenuList, Title } from "./StyledMyAccount";

function MyAccount() {
	const [value, setValue] = useState("1");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<Container maxWidth="lg">
			<Title>My account</Title>
			<TabContext value={value}>
				<MenuList>
					<TabList onChange={handleChange}>
						<Tab
							className="list-item"
							label="My profile"
							value="1"
						/>
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
