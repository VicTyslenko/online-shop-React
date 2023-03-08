import { Container } from '@mui/material';
import {ContainerWrapper, CategoryH1, CategoryLink, ImageText, GridContainer, GridItem} from './Categories.styles.js'


const itemData = [
	{
		img: 'https://cdn.discordapp.com/attachments/1043545360498442271/1053864504418652240/photo-1512201078372-9c6b2a0d528a.jpg',
		title: 'BAG SHOP',
		cols: 1,
		path: '/store/accessories',
	},
	{
		img: 'https://cdn.discordapp.com/attachments/1043545360498442271/1053864504154398740/photo-1551621955-fa07d4b1376b.jpg',
		title: 'DRESS SHOP',
		cols: 1,
		path: '/store/woman',
	},
	{
		img: 'https://cdn.discordapp.com/attachments/1043545360498442271/1055044828699828284/menswear-952835_960_720.png',
		title: 'BELT SHOP',
		cols: 1,
		path: '/store/accessories',
	},
	{
		img: 'https://cdn.discordapp.com/attachments/1043545360498442271/1053864504649334785/metafields-img.jpg',
		title: 'SUNGLASSES SHOP',
		cols: 3,
		path: '/store/accessories',
	}
]


function srcset(image, size, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${
			size * rows
		}&fit=crop&auto=format&dpr=2 2x`,
	};
};

function Categories() {

	return (
		<ContainerWrapper>
			<Container maxWidth='lg'>
			<CategoryH1>Shop by Category</CategoryH1>
				<GridContainer>
					{itemData.map((item) => (
						<GridItem key={item.img} column={item.cols} row={item.rows}>
							<CategoryLink to={item.path}>
								<img
									{...srcset(item.img, 121, item.rows, item.cols)}
									alt={item.title}
									loading="lazy"
								/>

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
