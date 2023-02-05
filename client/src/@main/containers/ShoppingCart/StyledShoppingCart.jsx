import styled from 'styled-components';
import { Button } from '@mui/material';
export const Container = styled.div`

`;
export const ShoppingCartWrapp = styled.div`
	/* margin-top: 38px; */
	width: 100%;
	/* background-color: white; */
	display: flex;
	justify-content: space-between;

	/* min-width: 1000px; */
`;
export const StyledButton = styled(Button)`
	&&& {
		width: 270px;
		background-color: black;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		text-transform: uppercase;
		margin-bottom: 26px;
	}
`;
export const LeftSideWrapp = styled.div`
	display: flex;
	flex-direction: column;

`;
export const RightSideWrapp = styled.div`

`
export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	/* & .image-wrapp {
		width: 174.67px;
		height: 253px;
	} */
	& .image {
		/* width:100% ;
		height:100% ; */
		width: 174.67px;
		height: 253px;
	}
	& .title {
		color: black;
		font-weight: 700;
		font-size: 18px;
		line-height: 25px;
		font-family: 'Open Sans';
		text-transform: uppercase;
	}
	& li{
		list-style:none ;
	}
	& .list{
		display: flex;
		flex-direction:column ;
		justify-content:space-between ;
	}


`;
