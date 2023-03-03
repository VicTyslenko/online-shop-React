import { useEffect, useState } from 'react';
import { Box, Pagination, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
// import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getProductList } from '../../store/actions/productListActions';
import { selectProductList, selectCount } from '../../store/selectors/productListSelectors';
import { selectMinPrice, selectMaxPrice, selectFilterColors } from '../../store/selectors/filterSelector';

import EmptyProductPage from './components/EmptyProductPage/EmptyProductPage';
import ProductCard from './components/ProductCard';
import ProductFilters from './components/ProductFilters';
import { StyledContainer, StyledBox, StyledTitle } from './ProductList.styles';

const perPage = 6;

function ProductList() {
	const [startPage, setPage] = useState(1);

	const products = useSelector(selectProductList);
	const count = useSelector(selectCount);
	const minPrice = useSelector(selectMinPrice);
	const maxPrice = useSelector(selectMaxPrice);
	const colors = useSelector(selectFilterColors);

	const dispatch = useDispatch();

	const handleChange = (event, value) => {
		setPage(value);
	};

	const isNotData = products.length === 0;
	// const test = useLocation();
	// console.log('asdf', test);

	useEffect(() => {
		dispatch(getProductList({startPage, perPage, minPrice, maxPrice, colors}));
	}, [startPage, dispatch, minPrice, maxPrice, colors]);

	return (
		<>
			{!isNotData && (
				<StyledContainer maxWidth="lg">
					{/* todo: Title of category - logic from menu and хлібні крихти для повернення на попередню сторінку замість кнопки назад */}
					<ProductFilters />
					<Box sx={{ pb: '30px' }}>
						<StyledTitle variant="title" component="div">
							Jackets
						</StyledTitle>
						<StyledBox>
							{products && products.map(({ name, currentPrice, imageUrls, _id, itemNo }) => (
								<ProductCard
									key={_id}
									title={name}
									price={currentPrice}
									url={imageUrls[0]}
									alt={name}
									id={itemNo} />
							))}
						</StyledBox>
						<Stack spacing={2}>
							<Pagination count={Math.ceil(count/perPage)} page={startPage} onChange={handleChange} />
						</Stack>
					</Box>
				</StyledContainer>
			)}
			{isNotData && (
				<StyledContainer
					maxWidth="lg"
					sx={{
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<EmptyProductPage />
				</StyledContainer>
			)}
		</>
	);
}

ProductList.propTypes = {
	title: PropTypes.string,
	articul: PropTypes.number,
	price: PropTypes.number,
	colors: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			color: PropTypes.string,
			colorHash: PropTypes.string,
		}),
	),
	sizes: PropTypes.arrayOf(PropTypes.number),
	productDetails: PropTypes.string,
	productDelivery: PropTypes.string,
};

export default ProductList;
