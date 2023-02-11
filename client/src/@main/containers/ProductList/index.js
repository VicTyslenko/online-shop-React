import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';

import ProductCard from './components/ProductCard';
import ProductFilters from './components/ProductFilters';
import { StyledContainer, StyledBox, StyledTitle } from './ProductList.styles';

const productListData = Array.from({ length: 5 }, (_, index) => ({
	title: 'black jacket',
	price: 256,
	articul: 456790,
	id: index,
	url: 'https://diadia.ua/image/cachewebp/catalog/2023-02/0702/27-1500x2000.webp',
	alt: 'dress',
}));

// Зробити map даних з бекенду фільтрів.

function ProductList() {
	// const test = useLocation();
	// console.log('asdf', test);

	return (
		<StyledContainer maxWidth="lg">
			{/* todo: Title of category - logic from menu and хлібні крихти для повернення на попередню сторінку замість кнопки назад */}
			<ProductFilters />
			<Box sx={{ pb: '30px' }}>
				<StyledTitle variant="title" component="div">
					Jackets
				</StyledTitle>
				<StyledBox>
					{productListData.map(({ title, price, url, alt, id }) => (
						<ProductCard key={id} title={title} price={price} url={url} alt={alt} id={id} />
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
