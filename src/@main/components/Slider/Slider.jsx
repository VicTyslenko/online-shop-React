/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-unresolved */


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/css/autoplay';
import { Container } from '@mui/material';
import './Slider.scss';

function Slider() {
	return (
		<div className='slider-container'>
		<Container>
			<Swiper
				modules={[Pagination, Scrollbar, A11y, Autoplay]}
				slidesPerView={1}
				autoplay
				pagination={{ clickable: true }}
				scrollbar={{ draggable: false }}
			>
				<SwiperSlide className="SwiperSlideClass first" style={{ justifyContent: 'center', width: '100%' }}>
					<img src="https://cdn.discordapp.com/attachments/1043545360498442271/1064594349867925524/photo-1483118714900-540cf339fd46_1.jpg" />
					<div>
						<h1 className="collection-text">new collection</h1>
						<a className="collection-link" href="https://www.google.com/webhp?authuser=1">
							<span>SH</span>OP NOW
						</a>
					</div>
				</SwiperSlide>
				<SwiperSlide className="SwiperSlideClass second">
					<img src="https://cdn.discordapp.com/attachments/1043545360498442271/1064594361121255484/photo-1519027356316-9f99e11d8bac_1.jpg" />
					<div>
						<h1 className="collection-text">end-of-season sale</h1>
						<a className="collection-link" href="https://www.google.com/webhp?authuser=1">
							<span>SH</span>OP NOW
						</a>
					</div>
				</SwiperSlide>
				<SwiperSlide className="SwiperSlideClass third">
					<img src="https://cdn.discordapp.com/attachments/1043545360498442271/1064594366951338014/photo-1513373319109-eb154073eb0b_1.jpg" />
					<div>
						<h1 className="collection-text">enjoy 70% off</h1>
						<a className="collection-link" href="https://www.google.com/webhp?authuser=1">
							<span>SH</span>OP NOW
						</a>
					</div>
				</SwiperSlide>
			</Swiper>
		</Container>
		</div>
	);
}

export default Slider;
