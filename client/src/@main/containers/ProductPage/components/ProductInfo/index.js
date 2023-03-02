import React, { useCallback, useState } from 'react';
import { Box, Button, IconButton, Typography, ListItemText, Popover  } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { addProductToCart, deleteProductFromCart } from '../../../../store/actions/cartActions';
import { addProductToWishlist, deleteProductFromWishlist } from '../../../../store/actions/wishlistActions';
// import Modal from '@mui/material/Modal';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import img from './sizeguide.jpg';
import {
	ActionsWrapper,
	ProductInfoHeader,
	ProductHeader,
	ListStyled,
	ListItemButtonStyled,
	ColorIcon,
	ListItemIconColor,
	ColorList,
	SizeList,
} from './ProductInfo.styles';

function ProductInfo({ id, name, productUrl, currentPrice, color, sizes, productDetails, productDelivery }) {
	const dispatch = useDispatch();
	const isCart = useSelector((state) => state.cart.data.find(({ product }) => id === product?._id));
	const isWishlist = useSelector((state) => state.wishlist.data.find((el) => id === el._id));

    const [selectedSizeIndex, setSelectedSizeIndex] = React.useState(1);
    const [selectedColorIndex, setSelectedColorIndex] = React.useState(1);
	// const [open, setOpen] = useState(false);

  	const handleListSizeClick = (event, index) => {
    	setSelectedSizeIndex(index);
  	};

	const handleListColorClick = (event, index) => {
    	setSelectedColorIndex(index);
  	};

	// const handleOpen = (index) => {
	// 	setOpen(true);
	// };

	// const handleClose = () => {
	// 	setOpen(false);
	// };
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const anchor = open ? 'simple-popover' : undefined;

	const handleClickCart = useCallback(() => {
        if(isCart) {
            dispatch(deleteProductFromCart(id));
        } else {
			dispatch(addProductToCart(id));
		}
    }, [id, isCart, dispatch]);

	const handleClickWishlist = useCallback(() => {
        if(isWishlist) {
            dispatch(deleteProductFromWishlist(id));
        } else {
			dispatch(addProductToWishlist(id));
        }
    }, [id, isWishlist, dispatch]);

	return (
		<Box maxWidth="390px" margin="auto">
			<ProductInfoHeader>
				<ProductHeader>
					<Typography variant="h3">{name}</Typography>
					<Typography variant="h3">{currentPrice} $</Typography>
				</ProductHeader>
				<Typography variant="overline">REF: {productUrl}</Typography>
			</ProductInfoHeader>
			<ColorList>
				<Typography variant="subtitle2">Color</Typography>
				<ListStyled>
					{color.map(({ color, hash }, index) => (
						<ListItemButtonStyled
							key={index}
							selected={selectedColorIndex === index}
							onClick={(event) =>  handleListColorClick(event, index)}
						>
							<ListItemIconColor>
								<ColorIcon backgroundColor={hash} />
							</ListItemIconColor>
							<ListItemText primary={color} />
						</ListItemButtonStyled>
					))}
				</ListStyled>
			</ColorList>
			<SizeList>
				<Typography variant="subtitle2">Size</Typography>
				<ListStyled>
					{sizes.map((item) => (
						<ListItemButtonStyled
							key={item}
							selected={selectedSizeIndex === item}
							onClick={(event) => handleListSizeClick(event, item)}
						>
							<ListItemText primary={item} />
						</ListItemButtonStyled>
					))}
				</ListStyled>
				{/* <Typography variant="caption" onClick={handleOpen} sx={{cursor: 'pointer'}}>Size guide</Typography> */}
				<Typography variant="caption" onClick={handleClick} sx={{cursor: 'pointer'}} aria-describedby={anchor}>Size guide</Typography>
				<Popover
					anchor={anchor}
					open={open}
					anchorEl={anchorEl}
					onClose={handleClose}
					anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
					}}
				>
						<img src={img} />
				</Popover>
			</SizeList>
			<ActionsWrapper>
				<Button color="primary" variant="contained" onClick={handleClickCart}>
					{isCart ? "Delete" : "Add to cart"}
				</Button>
				<IconButton
					onClick={handleClickWishlist}
					sx={{ color: isWishlist ? "#E01515" : "#fff"}}>
						<FavoriteBorderIcon />
				</IconButton>
			</ActionsWrapper>
			<Box sx={{ pb: '20px' }}>
				<Typography variant="subtitle2">Details</Typography>
				<Typography variant="body1">{productDetails}</Typography>
				<Typography mt={1} variant="body1">
					{productDelivery}
				</Typography>
			</Box>
			{/* <Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box>
					<img src={img} />
				</Box>
			</Modal> */}
		</Box>
	);
}

ProductInfo.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	productUrl: PropTypes.string.isRequired,
	currentPrice: PropTypes.number.isRequired,
	color: PropTypes.arrayOf(
		PropTypes.shape({
			color: PropTypes.string.isRequired,
			hash: PropTypes.string.isRequired,
		}),
	).isRequired,
	sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
	productDetails: PropTypes.string.isRequired,
	productDelivery: PropTypes.string.isRequired,
};

export default ProductInfo;
