import styled from "styled-components";
import { Box } from "@mui/material";

export const StyledBigImage = styled.img`
	width: 370px;
	height: 560px;
	object-fit: cover;
`;

export const StyledSmallImage = styled.img`
	width: 243px;
	height: 300px;
	object-fit: cover;
`;

export const StyledGallery = styled(Box)`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
`;
