/* eslint-disable import/no-unresolved */
import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import PropTypes from 'prop-types';
import Modal from '@mui/material/Modal';

import { Pagination, Navigation } from "swiper";

import {
	StyledBigImage,
	StyledSmallImage,
	StyledGallery,
	StyledMobileImage,
	StyledSwiperSlide,
	StyledSwiper,
	StyledOverlaySwiper,
	StyledOverlaySwiperSlide,
	StyledCloseIcon
} from './ProductGallery.styles';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";

function ProductGallery ({ images }) {
	const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
	<>
		{isMobile ? (
			<StyledSwiper
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
			>
				{images.map(({ id, url, alt }) => (
					<StyledSwiperSlide onClick={handleOpen} key={id}>
						<StyledMobileImage src={url} alt={alt} />
					</StyledSwiperSlide>
				))}
			</StyledSwiper>
		) : (
			<StyledGallery>
				{images.map(({ id, url, alt }, index) => (
					index < 2 ? (
						<StyledBigImage onClick={handleOpen} key={id} src={url} alt={alt} />
					) : (
						<StyledSmallImage onClick={handleOpen} key={id} src={url} alt={alt}/>
					)
				))}
			</StyledGallery>
		)}
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<StyledOverlaySwiper navigation modules={[Navigation]}>
				{images.map(({ id, url, alt }) => (
					<StyledOverlaySwiperSlide key={id}>
						<StyledMobileImage src={url} alt={alt}/>
						<StyledCloseIcon onClick={handleClose}/>
					</StyledOverlaySwiperSlide>
				))}
			</StyledOverlaySwiper>
		</Modal>
	</>
	)
}

ProductGallery.propTypes = {
	images: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			url: PropTypes.string.isRequired,
			alt: PropTypes.string.isRequired,
		})
	).isRequired,
}

export default ProductGallery;
