import { ListItemText, Popover, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCurrentSize } from "../../../../store/selectors/productSelector";
import { setSize } from "../../../../store/slices/productSlice";
import { ListItemButtonStyled, ListStyled, SizeList } from "./ProductInfo.styles";
import img from "./sizeguide.jpg";

function ProductInfoSizes({ sizes }) {
	const currentSize = useSelector(selectCurrentSize);
	const dispatch = useDispatch();

	const handleListSizeClick = value => {
		dispatch(setSize(value));
	};

	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const anchor = open ? "simple-popover" : undefined;

	return (
		<SizeList>
			<Typography variant="subtitle2">Size</Typography>
			<ListStyled>
				{sizes.map(item => (
					<ListItemButtonStyled key={item} selected={currentSize === item} onClick={() => handleListSizeClick(item)}>
						<ListItemText primary={item} />
					</ListItemButtonStyled>
				))}
			</ListStyled>
			<Typography variant="caption" onClick={handleClick} sx={{ cursor: "pointer" }} aria-describedby={anchor}>
				Size guide
			</Typography>
			<Popover
				anchor={anchor}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "center",
				}}
			>
				<img src={img} />
			</Popover>
		</SizeList>
	);
}

export default ProductInfoSizes;
