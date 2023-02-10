import React from 'react';
import { Box, Typography, List, ListItemButton, ListItemText, Collapse } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import { ListItemIconColor, ColorIcon } from './ProductFilters.styles';

function ProductFilterColors() {
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

	return (
		<>
			{isMobile ? (
				<Box>
					<ListItemButton onClick={handleClick}>
						<ListItemText primary="Colors" sx={{ textTransform: 'uppercase'}} />
					</ListItemButton>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItemButton>
								<ListItemIconColor>
									<ColorIcon />
								</ListItemIconColor>
								<ListItemText primary="black" />
							</ListItemButton>
							<ListItemButton>
								<ListItemIconColor>
									<ColorIcon />
								</ListItemIconColor>
								<ListItemText primary="brown" />
							</ListItemButton>
							<ListItemButton>
								<ListItemIconColor>
									<ColorIcon />
								</ListItemIconColor>
								<ListItemText primary="red" />
							</ListItemButton>
						</List>
					</Collapse>
				</Box>
			) : (
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
			)}
		</>
	);
}

export default ProductFilterColors;
