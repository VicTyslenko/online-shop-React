import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {Container, ImageListItemBar} from '@mui/material';
import {ContainerWrapper, NewInH1} from './NewCollection.styles'

const itemData = [
	{
		img: 'https://cdn.discordapp.com/attachments/1043545360498442271/1071016993660076063/photo-1487222477894-8943e31ef7b2.jpg',
		title: 'NEW IN',
		rows: 2,
		cols: 2,
	},
	{
		img: 'https://cdn.discordapp.com/attachments/1043545360498442271/1071016861933764618/three-3075752_960_720.jpg',
		title: 'NEW COLLECTION',
		cols: 2,
	},
	{
		img: 'https://cdn.discordapp.com/attachments/1043545360498442271/1071016977092591676/photo-1479064555552-3ef4979f8908.jpg',
		title: 'NEW COLLECTION',
		cols: 2,
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

function NewCollection() {
	return (
		<ContainerWrapper>
			<Container maxWidth='lg'>
				<NewInH1>New</NewInH1>
				<ImageList
					sx={{width: "100%", height: '100%', columnGap: '36px', rowGap: '20px'}}
					variant="quilted"
					cols={4}

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
									width: '40%'
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

export default NewCollection;

