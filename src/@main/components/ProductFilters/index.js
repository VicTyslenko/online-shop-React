/* eslint-disable no-console */
// хлібні крихти приклад: https://codesandbox.io/s/breadcrumbs-ut49q?file=/src/Breadcrumbs.jsx
import React from 'react';
import { Button, Box, Collapse, List, ListItemButton, ListItemText } from '@mui/material';

function ProductFilters() {
	const [open, setOpen] = React.useState(true);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<>
			<Button variant="text" onClick={console.log}>
				Woman
			</Button>
			<Box>
				<ListItemButton onClick={handleClick}>
					<ListItemText primary="Inbox" />
				</ListItemButton>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
					<ListItemButton sx={{ pl: 4 }}>
						<ListItemText primary="Starred" />
					</ListItemButton>
					</List>
				</Collapse>
				<Button variant="text" onClick={console.log}>
					View all
				</Button>
				<Button variant="text" onClick={console.log}>
					New arrivals
				</Button>
				<Button variant="text" onClick={console.log}>
					Jackets
				</Button>
				<Button variant="text" onClick={console.log}>
					Coats
				</Button>
				<Button variant="text" onClick={console.log}>
					Dresses
				</Button>
			</Box>
			<Button variant="text" onClick={console.log}>
				Colors
			</Button>
			<Button variant="text" onClick={console.log}>
				Price
			</Button>
		</>
	);
}

// ProductInfo.propTypes = {
// 	title: PropTypes.string.isRequired,
// 	articul: PropTypes.number.isRequired,
// 	price: PropTypes.number.isRequired,
// 	colors: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			id: PropTypes.number.isRequired,
// 			color: PropTypes.string.isRequired,
// 			colorHash: PropTypes.string.isRequired,
// 		}),
// 	).isRequired,
// 	sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
// 	productDetails: PropTypes.string.isRequired,
// 	productDelivery: PropTypes.string.isRequired,
// };

export default ProductFilters;
