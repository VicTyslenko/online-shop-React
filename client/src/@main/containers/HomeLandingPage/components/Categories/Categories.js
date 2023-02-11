import { Container, Link, ImageListItemBar } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {ContainerWrapper, CategoryH1} from './Categories.styles.js'


const itemData = [
	{
		img: 'https://cdn.discordapp.com/attachments/1043545360498442271/1053864504418652240/photo-1512201078372-9c6b2a0d528a.jpg',
		title: 'BAG SHOP',
		cols: 1,
	},
	{
		img: 'https://cdn.discordapp.com/attachments/1043545360498442271/1053864504154398740/photo-1551621955-fa07d4b1376b.jpg',
		title: 'DRESS SHOP',
		cols: 1,
	},
	{
		img: 'https://cdn.discordapp.com/attachments/1043545360498442271/1055044828699828284/menswear-952835_960_720.png',
		title: 'BELT SHOP',
		cols: 1,
	}, 
	{
		img: 'https://cdn.discordapp.com/attachments/1043545360498442271/1053864504649334785/metafields-img.jpg', 
		title: 'SUNGLASSES SHOP',
		cols: 3,
	}
]


function srcset(image, size, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${
			size * rows
		}&fit=crop&auto=format&dpr=2 2x`,
	};
}

function Categories() {
	return (
		<ContainerWrapper>
		<Container maxWidth='lg' >
			<CategoryH1>Shop by Category</CategoryH1>
			<ImageList
					sx={{width: "100%", height: '100%', columnGaps: '36px', rowGaps: '20px'}}
					variant="quilted"
					cols={3}

				>
					{itemData.map((item) => (
						<ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>

							<img
								{...srcset(item.img, 121, item.rows, item.cols)}
								alt={item.title}
								loading="lazy"
							/>


							<ImageListItemBar
								sx={{
									textAlign: "center",
									width: '300px'
								}}
								title={item.title}
							/>
						</ImageListItem>
					))}
				</ImageList>
		</Container>
		</ContainerWrapper>
	);
}

export default Categories;