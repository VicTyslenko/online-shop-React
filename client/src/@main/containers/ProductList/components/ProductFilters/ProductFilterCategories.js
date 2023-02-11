import React from 'react';
import { Box, ListItemButton, ListItemText, Collapse, List } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import { DividerStyled } from './ProductFilters.styles';

// const mock = [
// 	{
// 		id: "1",
// 		name: "New arrivals",
// 		parentId: "0",
// 	},
// 	{
// 		id: "2",
// 		name: "Jeans",
// 		parentId: "0",
// 	},
// 	{
// 		id: "3",
// 		name: "T-shirts",
// 		parentId: "0",
// 	},
// 	{
// 		id: "4",
// 		name: "Dresses",
// 		parentId: "1",
// 	},
// 	{
// 		id: "5",
// 		name: "Coats",
// 		parentId: "1",
// 	},
// 	{
// 		id: "6",
// 		name: "Jackets",
// 		parentId: "1",
// 	},
// ];

function ProductFilterCategories() {
	const [open, setOpen] = React.useState(false);
	const [openMobile, setOpenMobile] = React.useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const handleClickMobile = () => {
		setOpenMobile(!openMobile);
	};

	const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

	return (
		<>
		{isMobile ? (
			<Box>
				<ListItemButton onClick={handleClickMobile}>
					<ListItemText primary="Categories" sx={{ textTransform: 'uppercase'}} />
				</ListItemButton>
				<Collapse in={openMobile} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItemButton sx={{ pl: 4 }}>
							<ListItemText primary="Shirts" />
						</ListItemButton>
						<ListItemButton sx={{ pl: 4 }}>
							<ListItemText primary="Coats" />
						</ListItemButton>
						<ListItemButton sx={{ pl: 4 }}>
							<ListItemText primary="Jackets" />
						</ListItemButton>
						<ListItemButton sx={{ pl: 4 }}>
							<ListItemText primary="Sweaters" />
						</ListItemButton>
						<ListItemButton sx={{ pl: 4 }}>
							<ListItemText primary="Polos&Teens" />
						</ListItemButton>
						<ListItemButton sx={{ pl: 4 }}>
							<ListItemText primary="Jeans&Pants" />
						</ListItemButton>
						<ListItemButton sx={{ pl: 4 }}>
							<ListItemText primary="Outerwear" />
						</ListItemButton>
					</List>
				</Collapse>
			</Box>
		) : (
			<Box>
				<ListItemButton>
					<ListItemText secondary="View all" />
				</ListItemButton>
				<ListItemButton onClick={handleClick}>
					<ListItemText secondary="New arrivals" />
				</ListItemButton>
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
			</Box>)}
		</>
	);
};

export default ProductFilterCategories;
