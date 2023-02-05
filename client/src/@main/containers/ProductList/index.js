import { Box } from '@mui/material';

import ProductCard from './components/ProductCard';
import ProductFilters from './components/ProductFilters';
import { StyledContainer, StyledBox, StyledTitle } from './ProductList.styles';

const productListData = Array.from({ length: 5 }, (_, index) => ({
	title: 'black jacket',
	price: 256,
	articul: 456790,
	id: index,
	url: 'https://diadia.ua/image/catalog/slider/2022/IMG_9944.JPG',
	alt: 'dress',
}));

function ProductList() {
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
}

export default ProductList;
