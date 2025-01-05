import { Box, Pagination, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getProductList } from "../../store/actions/productListActions";
import { StyledBox, StyledContainer, StyledTitle } from "./ProductList.styles";
import EmptyProductPage from "./components/EmptyProductPage/EmptyProductPage";
import ProductCard from "./components/ProductCard";
import ProductFilters from "./components/ProductFilters";

const perPage = 6;

function ProductList() {
	const [startPage, setPage] = useState(1);
	const { category } = useParams();

	const { products, count, minPrice, maxPrice, colors, categories } = useSelector(state => ({
		products: state.productList.data,
		count: state.productList.count,
		minPrice: state.filters.minPrice,
		maxPrice: state.filters.maxPrice,
		colors: state.filters.colors,
		categories: state.filters.categories,
	}));

	const dispatch = useDispatch();

	const handleChange = value => {
		setPage(value);
	};

	const isNotData = products.length === 0;

	useEffect(() => {
		dispatch(
			getProductList({
				startPage,
				perPage,
				minPrice,
				maxPrice,
				colors,
				categories,
				male: category,
			}),
		);
		window.scrollTo(0, 0);
	}, [startPage, dispatch, minPrice, maxPrice, colors, categories, category]);

	return (
		<>
			<StyledContainer maxWidth="lg">
				<ProductFilters />
				{!isNotData && (
					<Box sx={{ pb: "30px" }}>
						<StyledTitle variant="title" component="div" sx={{ textTransform: "capitalize" }}>
							{categories}
						</StyledTitle>
						<StyledBox>
							{products &&
								products.map(({ name, currentPrice, imageUrls, _id, itemNo }) => (
									<ProductCard key={_id} title={name} price={currentPrice} url={imageUrls[0]} alt={name} id={itemNo} />
								))}
						</StyledBox>
						<Stack spacing={2}>
							<Pagination count={Math.ceil(count / perPage)} page={startPage} onChange={handleChange} />
						</Stack>
					</Box>
				)}
				{isNotData && <EmptyProductPage />}
			</StyledContainer>
		</>
	);
}

export default ProductList;
