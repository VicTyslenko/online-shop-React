import React from 'react';
// import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import ProductFilterColors from './ProductFilterColors';
import ProductFilterPrice from './ProductFilterPrice';
import ProductFilterCategories from './ProductFilterCategories';
import MobileFilter from './MobileFilters';
import { StyledBox } from './ProductFilters.styles';

// хлібні крихти приклад: https://codesandbox.io/s/breadcrumbs-ut49q?file=/src/Breadcrumbs.jsx
// або підключити з Mui + React Routes
function ProductFilters() {
	const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

	return (
		<>
			{isMobile ? (
				<MobileFilter />
			) : (
				<StyledBox>
					<Box sx={{ color: 'white' }} mb={4}>
						<ProductFilterCategories />
					</Box>
					<Box mb={4}>
						<ProductFilterColors />
					</Box>
					<Box mb={4}>
						<ProductFilterPrice />
					</Box>
				</StyledBox>
			)}
		</>
	);
};

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
