// import styled from "styled-components";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

export const StyledBigImage = styled('img')`
	width: 100%;
	height: 100%;
	grid-column-start: 0;
	grid-column-end: span 3;
	object-fit: cover;
`;

export const StyledSmallImage = styled('img')`
	width: 100%;
	height: 100%;
	grid-column-start: 0;
	grid-column-end: span 2;
	object-fit: cover;
`;

export const StyledGallery = styled(Box)`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	align-items: center;
	gap: 10px;
`;

export const StyledSwiper = styled(Swiper)`
	& .swiper-pagination-bullet-active {
		background: #000;
	}
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 80%;
	min-height: 294px;
	max-height: 460px;
`;

export const StyledMobileImage = styled('img')`
	width: 100%;
	height: 100%;
	min-width: 183px;
	max-width: 290px;
	min-height: 294px;
	object-fit: cover;

	${props => props.theme.breakpoints.up("sm")} {
		max-height: 603px;
		max-width: 400px;
	}
`;
