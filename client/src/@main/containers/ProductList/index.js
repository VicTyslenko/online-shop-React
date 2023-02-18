import { useEffect } from 'react';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';

import ProductCard from './components/ProductCard';
import ProductFilters from './components/ProductFilters';
import { StyledContainer, StyledBox, StyledTitle } from './ProductList.styles';

import { getProductList } from '../../store/actions/productListActions';
import { selectProductList } from '../../store/selectors/productListSelectors';

function ProductList() {
	const products = useSelector(selectProductList);
	const dispatch = useDispatch();
	// const test = useLocation();
	// console.log('asdf', test);

	useEffect(() => {
		dispatch(getProductList());
	}, []);

	return (
		<StyledContainer maxWidth="lg">
			{/* todo: Title of category - logic from menu and хлібні крихти для повернення на попередню сторінку замість кнопки назад */}
			<ProductFilters />
			<Box sx={{ pb: '30px' }}>
				<StyledTitle variant="title" component="div">
					Jackets
				</StyledTitle>
				<StyledBox>
					{products.map(({ name, currentPrice, imageUrls, _id, itemNo }) => (
						<ProductCard key={_id} title={name} price={currentPrice} url={imageUrls[0]} alt={name} id={itemNo} />
					))}
				</StyledBox>
			</Box>
		</StyledContainer>
	);
};

// ProductList.propTypes = {
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

export default ProductList;
