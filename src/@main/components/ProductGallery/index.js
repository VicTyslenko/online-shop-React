/* eslint-disable import/no-unresolved */
import useMediaQuery from '@mui/material/useMediaQuery';
import PropTypes from 'prop-types';

import { Pagination } from "swiper";

import {
	StyledBigImage,
	StyledSmallImage,
	StyledGallery,
	StyledMobileImage,
	StyledSwiperSlide,
	StyledSwiper
} from './ProductGallery.styles';
import 'swiper/css';
import 'swiper/css/pagination';

function ProductGallery ({ images }) {
	const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));

	return isMobile ? (
		<StyledSwiper
			spaceBetween={30}
			pagination={{
				clickable: true,
			}}
			modules={[Pagination]}
		>
			{images.map(({ id, url, alt }) => (
				<StyledSwiperSlide key={id}>
					<StyledMobileImage src={url} alt={alt} />
				</StyledSwiperSlide>
			))}
		</StyledSwiper>
	) : (
		<StyledGallery>
			{images.map(({ id, url, alt }, index) => (
				index < 2 ? (
						<StyledBigImage key={id} src={url} alt={alt} />
					) : (
						<StyledSmallImage key={id} src={url} alt={alt}/>
					)
			))}
		</StyledGallery>
	);
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
