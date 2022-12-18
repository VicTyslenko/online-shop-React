import { Container, Grid } from "@mui/material";

import ProductInfo from "../../components/ProductInfo";

const productInfoData = {
	title: 'black jacket',
	price: 256,
	articul: 456790,
	colors: 'black',
	sizes: [ 6, 8, 10 , 12],
	productDetails: 'lorem Lorem Lorem lorem',
	productDelivery: 'FREE STANDARD SHIPPING ON ORDERS OVER £100',
}
function ProductPage () {
	return (
		<Container>
			<Grid container spacing={2}>
				<Grid item xs={12} md={8}>12</Grid>
				<Grid item xs={12} md={4}>
					<ProductInfo {...productInfoData}/>
				</Grid>
			</Grid>
		</Container>
	)
}

export default ProductPage;
