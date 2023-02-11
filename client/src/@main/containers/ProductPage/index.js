import { Container, Grid } from '@mui/material';

import ProductInfo from './components/ProductInfo';
import ProductGallery from './components/ProductGallery';

const productInfoData = {
	title: 'black jacket',
	price: 256,
	articul: 456790,
	colors: [
		{
			id: 1,
			color: 'black',
			colorHash: '#000',
		},
		{
			id: 2,
			color: 'brown',
			colorHash: '#ccc',
		},
		{
			id: 3,
			color: 'red',
			colorHash: '#aaa',
		},
	],
	sizes: [6, 8, 10, 12],
	productDetails:
		'Mouton coat made of 100% sheepskin leather. Straight cut, collar with adjustable hood, front zip fastening, long sleeves and an adjustable hem. The back length for size M is 61,9 cm.',
	productDelivery: 'FREE STANDARD SHIPPING ON ORDERS OVER £100',
};

const productGalleryData = {
	images: Array.from({ length: 5 }, (_, index) => ({
		id: index,
		url: 'https://diadia.ua/image/cachewebp/catalog/2023-02/0702/27-1500x2000.webp',
		alt: 'dress',
	})),
};

function ProductPage() {
	return (
		<Container maxWidth="lg">
			<Grid container spacing={2}>
				<Grid item xs={12} sm={7} md={8}>
					<ProductGallery {...productGalleryData} />
				</Grid>
				<Grid item xs={12} sm={5} md={4}>
					<ProductInfo {...productInfoData} />
				</Grid>
			</Grid>
		</Container>
	);
}

export default ProductPage;
