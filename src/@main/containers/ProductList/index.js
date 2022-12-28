// import { Container } from '@mui/material';

import ProductCard from '../../components/ProductCard';
import { StyledContainer } from './ProductList.styles';

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
		<StyledContainer maxWidth="lg" display='flex'>
			{productListData.map(({ title, price, url, alt, id }) => (
					<ProductCard
						key={id}
						title={title}
						price={price}
						url={url}
						alt={alt}
					/>
				))}
		</StyledContainer>
	);
}

export default ProductList;
