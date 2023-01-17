import { Box, List, ListItemButton, ListItemIcon } from "@mui/material";
import styled from "styled-components";

export const ActionsWrapper = styled(Box)`
	display: flex;
	align-items: center;
	column-gap: 10px;
	margin-bottom: 20px;
`;

export const ProductHeader = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 390px;
`;

export const ProductInfoHeader = styled(Box)`
	margin-bottom: 50px;
`;

export const ListStyled = styled(List)`
	display: flex;
`;

export const ListItemButtonStyled = styled(ListItemButton)`
	max-width: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ColorIcon = styled(Box)`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	box-shadow: 0px 2px 4px rgba(119, 114, 114, 0.25);
`;

export const ListItemIconColor = styled(ListItemIcon)`
	display: flex;
	justify-content: center;
	align-items: center;
`;
