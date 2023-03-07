import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import ProductMoreCard from './ProductMoreCard';
import { selectProductList } from '../../../../store/selectors/productListSelectors';
import { selectFilterCategories } from '../../../../store/selectors/filterSelector';
import useMediaQuery from '@mui/material/useMediaQuery';

import { StyledBox } from './ProductMore.styles'

function ProductMore() {
	const products = useSelector(selectProductList);
	// const products = useSelector(selectFilterCategories);
	// console.log(products);
	const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

	return (
		!isMobile && (
			<>
				<Box mb={2}>
					<Typography variant="title">
						More for you
					</Typography>
				</Box>
				<StyledBox>
					{products && products.map(({ name, currentPrice, imageUrls, _id, itemNo }, index) =>
						index < 4 && (
							<ProductMoreCard
							key={_id}
							url={imageUrls[0]}
							title={name}
							price={currentPrice}
							id={_id}
							itemNo={itemNo}
						/>
					))}
				</StyledBox>
			</>
		));
}

export default ProductMore;
