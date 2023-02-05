import { Container, Link } from '@mui/material';
import CategoryNamePlank from './CategoryNamePlank';

function Categories() {
	return (
		<Container  sx={{ backgroundColor: 'black', paddingBottom: '210px', paddingTop: '226px' }}>
			<h1 style={{ color: '#fff', fontSize: '24px', fontWeight: '400', marginLeft: '60px', marginBottom: '35px' }}>Shop by Category</h1>
			<div style={{ display : 'flex', marginBottom: '30px'}}>
				<Link href='https://www.google.com/webhp?authuser=1' sx={{ position: 'relative'}}>
					<img
						src="https://cdn.discordapp.com/attachments/1043545360498442271/1053864504418652240/photo-1512201078372-9c6b2a0d528a.jpg"
						alt=""
						style={{ width: '100%' }}
					/>
					<CategoryNamePlank topStyle='85%' categoryName="bag shop" />
				</Link>
				<Link href='https://www.google.com/webhp?authuser=1' sx={{ position: 'relative', paddingRight: '16px', paddingLeft: '16px'  }}>
					<img
						src="https://cdn.discordapp.com/attachments/1043545360498442271/1053864504154398740/photo-1551621955-fa07d4b1376b.jpg"
						alt=""
						style={{ width: '100%' }}
					/>
					<CategoryNamePlank topStyle='85%' categoryName="dress shop" />
				</Link>
				<Link href='https://www.google.com/webhp?authuser=1' sx={{ position: 'relative' }}>
					<img
						src="https://cdn.discordapp.com/attachments/1043545360498442271/1055044828699828284/menswear-952835_960_720.png"
						alt=""
						style={{ width: '100%' }}
					/>
					<CategoryNamePlank topStyle='85%' categoryName="belt shop" />
				</Link>
			</div>
			<Link href='https://www.google.com/webhp?authuser=1' sx={{ position: 'relative' }}>
				<img
					src="https://cdn.discordapp.com/attachments/1043545360498442271/1053864504649334785/metafields-img.jpg"
					alt=""
					style={{ width: '100%' }}
				/>
				<CategoryNamePlank topStyle='-199%' categoryName="sunglasses shop" />
			</Link>
		</Container>
	);
}

export default Categories;