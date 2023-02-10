import React from 'react';
import { Box, Slider, Typography, List, ListItemButton, ListItemText, Collapse } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import { StyledFilterPriceBox, MobileFilterPriceBox } from './ProductFilters.styles';

function ProductFilterPrice() {
	const [value, setValue] = React.useState([0, 2500]);
	const [open, setOpen] = React.useState(false);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleClick = () => {
		setOpen(!open);
	};

	const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

	return (
		<>
			{isMobile ? (
				<Box>
					<ListItemButton onClick={handleClick}>
						<ListItemText primary="Price" sx={{ textTransform: 'uppercase'}} />
					</ListItemButton>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<MobileFilterPriceBox>
								<Typography variant="subtitle1" pb={2} sx={{ color: '#000'}} >
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
							</MobileFilterPriceBox>
						</List>
					</Collapse>
				</Box>
			) : (
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
			)}
		</>
	);
}

export default ProductFilterPrice;
