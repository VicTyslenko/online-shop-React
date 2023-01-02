/* eslint-disable import/no-unresolved */
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import PropTypes from 'prop-types';
import Modal from '@mui/material/Modal';

import { Pagination, Navigation, Controller } from 'swiper';

import {
	StyledBigImage,
	StyledSmallImage,
	StyledGallery,
	StyledMobileImage,
	StyledSwiperSlide,
	StyledSwiper,
	StyledOverlaySwiper,
	StyledOverlaySwiperSlide,
	StyledCloseIcon,
	StyledOverlayImage,
} from './ProductGallery.styles';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function ProductGallery({ images }) {
	const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));

	const [open, setOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleOpen = (index) => {
		setCurrentIndex(index);
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			{isMobile ? (
				<StyledSwiper
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination, Controller]}
				>
					{images.map(({ id, url, alt }, index) => (
						<StyledSwiperSlide onClick={() => handleOpen(index)} key={id}>
							<StyledMobileImage src={url} alt={alt} />
						</StyledSwiperSlide>
					))}
				</StyledSwiper>
			) : (
				<StyledGallery>
					{images.map(({ id, url, alt }, index) =>
						index < 2 ? (
							<StyledBigImage onClick={() => handleOpen(index)} key={id} src={url} alt={alt} />
						) : (
							<StyledSmallImage onClick={() => handleOpen(index)} key={id} src={url} alt={alt} />
						),
					)}
				</StyledGallery>
			)}
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<StyledOverlaySwiper navigation modules={[Navigation, Controller]} initialSlide={currentIndex}>
					{images.map(({ id, url, alt }) => (
						<StyledOverlaySwiperSlide key={id}>
							<StyledOverlayImage src={url} alt={alt} />
							<StyledCloseIcon fontSize="large" onClick={handleClose} />
						</StyledOverlaySwiperSlide>
					))}
				</StyledOverlaySwiper>
			</Modal>
		</>
	);
}

ProductGallery.propTypes = {
	images: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			url: PropTypes.string.isRequired,
			alt: PropTypes.string.isRequired,
		}),
	).isRequired,
};

export default ProductGallery;
