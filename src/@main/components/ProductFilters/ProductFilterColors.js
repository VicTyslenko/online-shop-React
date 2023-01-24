import { Box, Typography, List, ListItemButton, ListItemText } from '@mui/material';

import { ListItemIconColor, ColorIcon } from './ProductFilters.styles';

function ProductFilterColors() {
	return (
		<Box>
			<Typography variant="h4">Colors</Typography>
			<List>
				<ListItemButton>
					<ListItemIconColor>
						<ColorIcon />
					</ListItemIconColor>
					<ListItemText secondary="black" />
				</ListItemButton>
				<ListItemButton>
					<ListItemIconColor>
						<ColorIcon />
					</ListItemIconColor>
					<ListItemText secondary="brown" />
				</ListItemButton>
				<ListItemButton>
					<ListItemIconColor>
						<ColorIcon />
					</ListItemIconColor>
					<ListItemText secondary="red" />
				</ListItemButton>
			</List>
		</Box>
	);
}

export default ProductFilterColors;
