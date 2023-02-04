import React from 'react';
import { Box, Slider, Typography } from '@mui/material';

import { StyledFilterPriceBox } from './ProductFilters.styles';

function ProductFilterPrice() {
	const [value, setValue] = React.useState([0, 2500]);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box>
			<Typography variant="h4" pb={2}>
				Price
			</Typography>
			{/* todo: price min and max make as inputs to change price range */}
			<Typography variant="subtitle1" pb={2}>
				$ {value[0]} - $ {value[1]}
			</Typography>
			<StyledFilterPriceBox>
				<Slider
					getAriaLabel={() => 'Price range'}
					value={value}
					onChange={handleChange}
					valueLabelDisplay="auto"
					valueLabelFormat={(label) => `$${label}`}
					min={0}
					max={2500}
					// getAriaValueText={value}
				/>
			</StyledFilterPriceBox>
		</Box>
	);
}

export default ProductFilterPrice;
