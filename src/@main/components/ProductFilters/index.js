/* eslint-disable no-console */
// хлібні крихти приклад: https://codesandbox.io/s/breadcrumbs-ut49q?file=/src/Breadcrumbs.jsx
import React from 'react';
import { Box, Collapse, List, ListItemButton, ListItemText, Typography, Slider } from '@mui/material';

import { ListItemIconColor, ColorIcon } from './ProductFilters.styles';

function ProductFilters() {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState([0, 2500]);

	const handleClick = () => {
		setOpen(!open);
	};

	const handleChange = (event, newValue) => {
	  setValue(newValue);
	};

	return (
		<Box sx={{ maxWidth: 350, minWidth: 150, p: 6, background: 'black', color: 'white' }}>
			<Typography variant="h4">Woman</Typography>
			<Box sx={{ color: 'white' }}>
				<ListItemButton>
					<ListItemText primary="View all" />
				</ListItemButton>
				<ListItemButton onClick={handleClick}>
					<ListItemText primary="New arrivals" />
				</ListItemButton>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItemButton sx={{ pl: 4 }}>
							<ListItemText primary="Dresses" />
						</ListItemButton>
						<ListItemButton sx={{ pl: 4 }}>
							<ListItemText primary="Coats" />
						</ListItemButton>
						<ListItemButton sx={{ pl: 4 }}>
							<ListItemText primary="Jackets" />
						</ListItemButton>
					</List>
				</Collapse>
				<ListItemButton>
					<ListItemText primary="Jeans" />
				</ListItemButton>
				<ListItemButton>
					<ListItemText primary="T-shirts" />
				</ListItemButton>
			</Box>
			<Typography variant="h4">Colors</Typography>
			<List>
				<ListItemButton>
					<ListItemIconColor>
						<ColorIcon />
					</ListItemIconColor>
					<ListItemText primary="black" />
				</ListItemButton>
				<ListItemButton>
					<ListItemIconColor>
						<ColorIcon />
					</ListItemIconColor>
					<ListItemText primary="brown" />
				</ListItemButton>
				<ListItemButton>
					<ListItemIconColor>
						<ColorIcon />
					</ListItemIconColor>
					<ListItemText primary="red" />
				</ListItemButton>
			</List>
			<Typography variant="h4">Price</Typography>
			<Box sx={{ width: 190, pl: 2 }}>
				<Slider
					getAriaLabel={() => 'Temperature range'}
					value={value}
					onChange={handleChange}
					valueLabelDisplay="auto"
					// getAriaValueText={valuetext}
				/>
			</Box>
		</Box>
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
