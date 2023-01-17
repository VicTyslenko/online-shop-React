import useMediaQuery from '@mui/material/useMediaQuery';
import { Container, Typography } from '@mui/material';

import ProductCard from '../../components/ProductCard';
import ProductFilters from '../../components/ProductFilters';
import { StyledBox, StyledBoxMobile, StyledTitle } from './ProductList.styles';

const productListData = Array.from({ length: 5 }, (_, index) => ({
	title: 'black jacket',
	price: 256,
	articul: 456790,
	id: index,
	url: 'https://diadia.ua/image/catalog/slider/2022/IMG_9944.JPG',
	alt: 'dress',
}));

function ProductList() {
	const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

	return (
		<Container maxWidth="lg">
			{/* todo: Title of category - logic from menu and хлібні крихти для повернення на попередню сторінку замість кнопки назад */}
			<ProductFilters />
			<StyledTitle>
				{isMobile ? (
					// todo: Filters button with link styles {fontWeight: 400, fontSize: '14px', lineHeight: '14px', color: '#3F3D3D',}
					<Typography variant="title" textTransform="capitalize">
						Filters
					</Typography>
				) : (
					<Typography variant="title" textTransform="capitalize">
						Jackets
					</Typography>
				)}
			</StyledTitle>
			{isMobile ? (
				<StyledBoxMobile>
					{productListData.map(({ title, price, url, alt, id }) => (
						<ProductCard key={id} title={title} price={price} url={url} alt={alt} id={id} />
					))}
				</StyledBoxMobile>
			) : (
				<StyledBox>
					{productListData.map(({ title, price, url, alt, id }) => (
						<ProductCard key={id} title={title} price={price} url={url} alt={alt} id={id} />
					))}
				</StyledBox>
			)}
		</Container>
	);
}

export default ProductList;
