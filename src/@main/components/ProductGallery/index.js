/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';

import { StyledBigImage, StyledSmallImage, StyledGallery } from './ProductGallery.styles';

function ProductGallery({ images }) {
	return (
		<StyledGallery>
			{images.map(({ id, url, alt }, index) =>
				index < 2 ? (
					<StyledBigImage key={id} src={url} alt={alt} />
				) : (
					<StyledSmallImage key={id} src={url} alt={alt} />
				),
			)}
		</StyledGallery>
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
