import { Box, Button, IconButton, Typography, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';

import FavoriteIcon from './FavoriteIcon';
import {
	ActionsWrapper,
	ProductInfoHeader,
	ProductHeader,
	ListStyled,
	ListItemButtonStyled,
	ColorIcon,
	ListItemIconColor,
} from './ProductInfo.styles';

function ProductInfo({ title, articul, price, colors, sizes, productDetails, productDelivery }) {
	return (
		<Box>
			<ProductInfoHeader>
				<ProductHeader>
					<Typography variant="h3">{title}</Typography>
					<Typography variant="h3">{price} $</Typography>
				</ProductHeader>
				<Typography variant="overline">REF: {articul}</Typography>
			</ProductInfoHeader>
			<Box mb={1}>
				<Typography variant="subtitle2">Color</Typography>
				<ListStyled>
					{colors.map(({ id, color, colorHash }) => (
						<ListItemButtonStyled key={id}>
							<ListItemIconColor>
								<ColorIcon mb={1} backgroundColor={colorHash} />
							</ListItemIconColor>
							<ListItemText primary={color} />
						</ListItemButtonStyled>
					))}
				</ListStyled>
			</Box>
			<Box mb={6}>
				<Typography variant="subtitle2">Size</Typography>
				<ListStyled>
					{sizes.map((item) => (
						<ListItemButtonStyled key={item}>
							<ListItemText primary={item} />
						</ListItemButtonStyled>
					))}
				</ListStyled>
				<Typography variant="caption">Size guide</Typography>
			</Box>
			<ActionsWrapper>
				<Button color="primary" variant="contained" onClick={console.log}>
					Add to busket
				</Button>
				<IconButton>
					<FavoriteIcon />
				</IconButton>
			</ActionsWrapper>
			<Box>
				<Typography variant="subtitle2">Details</Typography>
				<Typography variant="body1">{productDetails}</Typography>
				<Typography mt={2} variant="body1">
					{productDelivery}
				</Typography>
			</Box>
		</Box>
	);
}

ProductInfo.propTypes = {
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

export default ProductInfo;
