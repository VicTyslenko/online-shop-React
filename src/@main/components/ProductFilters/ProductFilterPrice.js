import React from 'react';
import { Box, Slider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)`
	width: 260px;
	padding-left: 0;

	${(props) => props.theme.breakpoints.down('lg')} {
		width: 230px;
	}
	${(props) => props.theme.breakpoints.down('md')} {
		width: 160px;
	}
`;

function ProductFilterPrice () {
	const [value, setValue] = React.useState([0, 2500]);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box>
			<Typography variant="h4" pb={2}>Price</Typography>
			{/* todo: price min and max make as inputs to change price range */}
			<Typography variant="subtitle1" pb={2}>$ {value[0]} - $ {value[1]} </Typography>
			<StyledBox>
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
			</StyledBox>
		</Box>
	);
}

export default ProductFilterPrice;
