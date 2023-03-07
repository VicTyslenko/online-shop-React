import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Container } from '@mui/material';
import NewCollection from './banners/NewCollection';
import EndSale from './banners/EndSale';
import EnjoyOff from './banners/EnjoyOff';

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/css/autoplay';
import { ContainerWrapper } from './Slider.styles';

function Slider() {
	return (
		<ContainerWrapper>
		<Container maxWidth='lg'>
			<Swiper
				modules={[Pagination, Scrollbar, A11y, Autoplay]}
				slidesPerView={1}
				autoplay
				pagination={{ clickable: true }}
				scrollbar={{ draggable: false }}
			>
				<SwiperSlide >
					<Link to="/store/man">
						<NewCollection />
					</Link>
				</SwiperSlide>
				<SwiperSlide >
					<Link to="/store/man">
						<EndSale />
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link to="/store/man">
						<EnjoyOff />
					</Link>
				</SwiperSlide>
			</Swiper>
		</Container>
		</ContainerWrapper>
	);
}

export default Slider;
