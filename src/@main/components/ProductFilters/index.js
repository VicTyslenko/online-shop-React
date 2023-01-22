/* eslint-disable no-console */
// хлібні крихти приклад: https://codesandbox.io/s/breadcrumbs-ut49q?file=/src/Breadcrumbs.jsx
import React from 'react';
import { Box, Collapse, List, ListItemButton, ListItemText, Typography, Modal } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import ProductFilterPrice from './ProductFilterPrice';
import { ListItemIconColor, ColorIcon, DividerStyled, StyledBox } from './ProductFilters.styles';

function ProductFilters() {
	const [open, setOpen] = React.useState(false);
	const [openModal, setOpenModal] = React.useState(false);

	const handleOpen = () => {
		setOpenModal(true);
	};
	const handleClose = () => {
		setOpenModal(false);
	};

	const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<>
			{isMobile ? (
				<Typography variant="title" textTransform="capitalize" onClick={handleOpen}>
					Filters
				</Typography>
			) : (
				<StyledBox>
					<Typography variant="h4">Woman</Typography>
					<Box sx={{ color: 'white' }} mb={8}>
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
					</Box>
					<Box mb={8}>
						<Typography variant="h4">Colors</Typography>
						<List>
							<ListItemButton>
								<ListItemIconColor>
									<ColorIcon />
								</ListItemIconColor>
								<ListItemText secondary="black" />
							</ListItemButton>
							<ListItemButton>
								<ListItemIconColor>
									<ColorIcon />
								</ListItemIconColor>
								<ListItemText secondary="brown" />
							</ListItemButton>
							<ListItemButton>
								<ListItemIconColor>
									<ColorIcon />
								</ListItemIconColor>
								<ListItemText secondary="red" />
							</ListItemButton>
						</List>
					</Box>
					<Box mb={8}>
						<ProductFilterPrice />
					</Box>
				</StyledBox>
			)
			}
			<Modal
				open={openModal}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Typography>Modal</Typography>
			</Modal>
		</>
	);
}

// ProductFilters.propTypes = {
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
