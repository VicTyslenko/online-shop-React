import React from 'react';
import {Box, Grid, Button} from '@mui/material';
import styled from 'styled-components';

const GridItem = styled(Grid)`
	&&&{
		display: flex;
		justify-content: center;
		align-items: center;
	}
`

const ButtonItem = styled(Button)`
	&&&{
		//font-size: 14px;
	}
`

const Title = styled.h1`
	text-align: center;
	margin-top: 26px;
	margin-bottom: 50px;
	font-size: 28px;
`


const Management = () => {
	return (
		<>
			<Box>
				<Title>Theme Settings</Title>
				<Grid container spacing={1} rowSpacing={8}>
					<GridItem item xs={12} md={4}>
						<ButtonItem variant="outlined" color="inherit">Upload Logotype</ButtonItem>
					</GridItem>
					<GridItem item xs={12} md={4}>
						<ButtonItem variant="outlined" color="inherit">Favicon</ButtonItem>
					</GridItem>
					<GridItem item xs={12} md={4}>
						<ButtonItem variant="outlined" color="inherit">Choose Main Colour</ButtonItem>
					</GridItem>
					<GridItem item xs={12} md={6}>
						<ButtonItem variant="outlined" color="inherit">Heading Font</ButtonItem>
					</GridItem>
					<GridItem item xs={12} md={6}>
						<ButtonItem variant="outlined" color="inherit">Body Font</ButtonItem>
					</GridItem>
				</Grid>
			</Box>
			<Box>
				<Title>SEO</Title>
				<Grid container spacing={1} rowSpacing={8}>
					<GridItem item xs={12} md={4}>
						<ButtonItem variant="outlined" color="inherit">Title</ButtonItem>
					</GridItem>
					<GridItem item xs={12} md={4}>
						<ButtonItem variant="outlined" color="inherit">Description</ButtonItem>
					</GridItem>
					<GridItem item xs={12} md={4}>
						<ButtonItem variant="outlined" color="inherit">Keywords</ButtonItem>
					</GridItem>
				</Grid>
			</Box>
		</>
	);
};

export default Management;
