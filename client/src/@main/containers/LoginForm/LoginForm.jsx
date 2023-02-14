// import React from 'react'
import { useState } from 'react';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import { ContainerWrapper, HeadWrapp } from './StyledLoginForm';
import { Container } from '@mui/system';

const LoginForm = () => {
	const [value, setValue] = useState('1');
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<ContainerWrapper>
			<Container
				maxWidth="lg"
				sx={{
					display: 'flex',
                    flexDirection:'column',
                    alignItems:'center',
				}}
			>
				<TabContext value={value}>
					<HeadWrapp>
						<TabList onChange={handleChange}>
							<Tab className="list-item login" label="Login" value='1' />
							<Tab className="list-item registration" label="Registration" value='2' />
						</TabList>
					</HeadWrapp>
					<TabPanel value="1">
						<Login />
					</TabPanel>
					<TabPanel value="2">
						<Registration />
					</TabPanel>
				</TabContext>
			</Container>
		</ContainerWrapper>
	);
};

export default LoginForm;
