import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function ProductCard({ url, alt, title, price, id }) {
	const navigate = useNavigate();

	const handlerOpenCard = () => {
		navigate(`/product/${id}`);
	};

	return (
		<Card sx={{ maxWidth: 370 }}>
			<CardActionArea onClick={handlerOpenCard}>
				<CardMedia component="img" image={url} alt={alt} id={id} />
				<CardContent>
					<Typography gutterBottom variant="title" component="div">
						{title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{price} $
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

ProductCard.propTypes = {
	title: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	alt: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
};

export default ProductCard;
