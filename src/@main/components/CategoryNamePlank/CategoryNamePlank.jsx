import { Typography } from '@mui/material';
import './CategoryNamePlank.scss';

function CategoryNamePlank(props) {
	const { categoryName, topStyle } = props;

	return (
		<div
			className="categoryPlank"
			style={{
				backgroundColor: 'rgba(11, 10, 10, 0.7)',
				textAlign: 'center',
				position: 'absolute',
				top: `${topStyle}`,
			}}
		>
			<Typography
				className="categoryPlankText"
				variant="h2"
				sx={{ fontWeight: '700', color: '#fff', textTransform: 'uppercase' }}
			>
				{categoryName}
			</Typography>
		</div>
	);
}

export default CategoryNamePlank;

CategoryNamePlank.defaultProps = {
	categoryName: 'string',
	topStyle: 'string',
};
CategoryNamePlank.propTypes = {
	categoryName: 'string',
	topStyle: 'string',
};
