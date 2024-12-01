import { Container } from '@mui/material';
import { ContainerWrapper, CategoryH1, CategoryLink, ImageText, GridContainer, GridItem } from './Categories.styles.js';
import { itemData } from './data.js';

function srcset(image, size, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
	};
}

function Categories() {
	return (
		<ContainerWrapper>
			<Container maxWidth="lg">
				<CategoryH1>Shop by Category</CategoryH1>
				<GridContainer>
					{itemData.map((item) => (
						<GridItem key={item.img} column={item.cols} row={item.rows}>
							<CategoryLink to={item.path}>
								<img {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} loading="lazy" />

								<ImageText>{item.title}</ImageText>
							</CategoryLink>
						</GridItem>
					))}
				</GridContainer>
			</Container>
		</ContainerWrapper>
	);
}

export default Categories;
