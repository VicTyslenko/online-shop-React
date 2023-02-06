// хлібні крихти приклад: https://codesandbox.io/s/breadcrumbs-ut49q?file=/src/Breadcrumbs.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Modal } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import ProductFilterColors from './ProductFilterColors';
import ProductFilterPrice from './ProductFilterPrice';
import ProductFilterCategories from './ProductFilterCategories';
import { StyledBox, StyledTypography } from './ProductFilters.styles';

function ProductFilters() {
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

	return (
		<>
			{isMobile ? (
				<StyledTypography variant="title" onClick={handleOpen}>
					Filters
				</StyledTypography>
			) : (
				<StyledBox>
					<Typography variant="h4">Woman</Typography>
					<Box sx={{ color: 'white' }} mb={8}>
						<ProductFilterCategories />
					</Box>
					<Box mb={8}>
						<ProductFilterColors />
					</Box>
					<Box mb={8}>
						<ProductFilterPrice />
					</Box>
				</StyledBox>
			)}
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Typography>Modal</Typography>
			</Modal>
		</>
	);
}

ProductFilters.propTypes = {
	title: PropTypes.string.isRequired,
	articul: PropTypes.number.isRequired,
	price: PropTypes.number.isRequired,
	colors: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			color: PropTypes.string.isRequired,
			colorHash: PropTypes.string.isRequired,
		}),
	).isRequired,
	sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
	productDetails: PropTypes.string.isRequired,
	productDelivery: PropTypes.string.isRequired,
};

export default ProductFilters;
