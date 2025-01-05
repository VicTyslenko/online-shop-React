import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";

import MobileFilter from "./MobileFilters";
import ProductFilterCategories from "./ProductFilterCategories";
import ProductFilterColors from "./ProductFilterColors";
import ProductFilterPrice from "./ProductFilterPrice";
import { StyledBox } from "./ProductFilters.styles";

function ProductFilters() {
	const isMobile = useMediaQuery(theme => theme.breakpoints.down("sm"));

	return (
		<>
			{isMobile ? (
				<MobileFilter />
			) : (
				<StyledBox>
					<Box sx={{ color: "white" }} mb={4}>
						<ProductFilterCategories />
					</Box>
					<Box mb={4}>
						<ProductFilterColors />
					</Box>
					<Box mb={4}>
						<ProductFilterPrice />
					</Box>
				</StyledBox>
			)}
		</>
	);
}

export default ProductFilters;
