import { ContainerWrapper, NewInH1, NewInLink, ImageText, GridContainer, GridItem } from './NewCollection.styles';
import { Container } from '@mui/material';

const itemData = [
	{
		// img: 'https://hrd-live.cdn.scayle.cloud/images/9655725e9d1ba4f44314ba7810659df1.jpg?brightness=1&width=1536&height=2048&quality=75&bg=ffffff',
		img: '/img/admin.jpg',
		title: 'NEW IN',
		rows: 2,
		cols: 1,
		path: '/store/man',
	},
	{
		img: 'https://hrd-live.cdn.scayle.cloud/images/6933ff8c220f23e322822e8095a05cb4.jpg?brightness=1&width=1536&height=2048&quality=75&bg=ffffff',
		title: 'NEW COLLECTION',
		rows: 1,
		cols: 1,
		path: '/store/woman',
	},
	{
		img: 'https://hrd-live.cdn.scayle.cloud/images/244d68e9b79e2db8cbb0ed00736d8976.jpg?brightness=1&width=1536&height=2048&quality=75&bg=ffffff',
		title: 'NEW COLLECTION',
		rows: 1,
		cols: 1,
		path: '/store/accessories',
	},
];

function srcset(image, size, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
	};
}

function NewCollection() {
	return (
		<ContainerWrapper>
			<Container maxWidth="lg">
				<NewInH1>New</NewInH1>
				<GridContainer>
					{itemData.map((item) => (
						<GridItem key={item.img} column={item.cols} row={item.rows}>
							<NewInLink to={item.path}>
								<img {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} loading="lazy" />
								<ImageText>{item.title}</ImageText>
							</NewInLink>
						</GridItem>
					))}
				</GridContainer>
			</Container>
		</ContainerWrapper>
	);
}

export default NewCollection;
