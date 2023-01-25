import React from 'react';
import { Box, ListItemButton, ListItemText, Collapse, List } from '@mui/material';

import { DividerStyled } from './ProductFilters.styles';

function ProductFilterCategories() {
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<Box>
			<ListItemButton>
				<ListItemText secondary="View all" />
			</ListItemButton>
			<ListItemButton onClick={handleClick}>
				<ListItemText secondary="New arrivals" />
			</ListItemButton>
			{/* додати стрілку для колапсу */}
			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<DividerStyled />
					<ListItemButton sx={{ pl: 4 }}>
						<ListItemText secondary="Dresses" />
					</ListItemButton>
					<ListItemButton sx={{ pl: 4 }}>
						<ListItemText secondary="Coats" />
					</ListItemButton>
					<ListItemButton sx={{ pl: 4 }}>
						<ListItemText secondary="Jackets" />
					</ListItemButton>
				</List>
			</Collapse>
			<ListItemButton>
				<ListItemText secondary="Jeans" />
			</ListItemButton>
			<ListItemButton>
				<ListItemText secondary="T-shirts" />
			</ListItemButton>
		</Box>
	);
}

export default ProductFilterCategories;
