import { Box, Typography } from "@mui/material";
import React from "react";

import PropTypes from "prop-types";

import { ProductHeader, ProductInfoHeader } from "./ProductInfo.styles";
import ProductInfoActions from "./ProductInfoActions";
import ProductInfoColors from "./ProductInfoColors";
import ProductInfoSizes from "./ProductInfoSizes";

function ProductInfo({ id, name, productUrl, currentPrice, colors, sizes, productDetails, productDelivery }) {
	return (
		<Box maxWidth="390px" margin="auto">
			<ProductInfoHeader>
				<ProductHeader>
					<Typography variant="h3" sx={{ width: "80%" }}>
						{name}
					</Typography>
					<Typography variant="h3" sx={{ width: "20%" }}>
						{currentPrice} $
					</Typography>
				</ProductHeader>
				<Typography variant="overline">REF: {productUrl}</Typography>
			</ProductInfoHeader>
			<ProductInfoColors colors={colors} />
			<ProductInfoSizes sizes={sizes} />
			<ProductInfoActions id={id} />
			<Box sx={{ pb: "20px" }}>
				<Typography variant="subtitle2">Details</Typography>
				<Typography variant="body1">{productDetails}</Typography>
				<Typography mt={1} variant="body1">
					{productDelivery}
				</Typography>
			</Box>
		</Box>
	);
}

export default ProductInfo;
