import { Box, List, ListItemButton } from "@mui/material";
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
`;

export const ProductInfoHeader = styled(Box)`
	margin-bottom: 50px;
`;

export const ListStyled = styled(List)`
	display: flex;
`;

export const ListItemButtonStyled = styled(ListItemButton)`
	max-width: fit-content;
`;
