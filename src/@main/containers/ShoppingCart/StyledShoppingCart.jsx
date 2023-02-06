import styled from 'styled-components';
import { Button } from '@mui/material';
// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div``;
export const ShoppingCartWrapp = styled.div`
	/* margin-top: 38px; */
	width: 100%;
	/* background-color: white; */
	display: flex;
	justify-content: space-between;

	/* min-width: 1000px; */
`;
export const ContentWrapp = styled.div`
	display: flex;
	justify-content: space-between;
	position: relative;
	& .remove-from-basket {
		position: absolute;
		bottom: 0;
		right: -300px;
		color: #847a7a;
		align-self: flex-end;
		font-weight: 400;
		font-size: 14px;
		line-height: 19px;
		font-family: 'Open Sans';
	}
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
		/* margin-bottom: 26px; */
	}
`;
export const LeftSideWrapp = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 26px;
`;
export const RightSideWrapp = styled.div`
	width: 362px;
	background: #c4c4c4;
	height: fit-content;

	padding: 40px 0 40px 40px;
	& .title {
		margin: 0 0 30px 0;
		font-weight: 700;
		font-size: 16px;
		line-height: 16px;
		font-family: 'Josefin Sans';
		text-transform: uppercase;
	}
	& .discount {
		font-weight: 400;
		font-size: 12px;
		line-height: 16px;
		font-family: 'Open Sans';
		text-transform: uppercase;
		margin: 0;
	}
	& .line {
		margin-top: 77px;
		margin-bottom: 50px;
		height: 1px;
		background: grey;
		border: none;
	}
	& .order {
		font-weight: 400;
		font-size: 14px;
		line-height: 14px;
		font-family: 'Josefin Sans';
		text-transform: uppercase;
		margin-bottom: 30px;
	}
	& .total {
		font-weight: 700;
		font-size: 14px;
		line-height: 14px;
		text-transform: uppercase;
		font-family: 'Josefin Sans';
		margin-bottom: 130px;
	}
	& .button-wrapp {
		display: flex;
		justify-content: center;
	}
`;
export const Content = styled.div`
	display: flex;
	gap: 37px;

&{
	border-bottom:1px solid #C4C4C4 ;
	/* width: 810px; */
	margin-bottom:42px ;
}

	& .image {
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
	& li {
		list-style: none;
	}
	& .list {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	& .total {
		font-weight: 700;
		font-size: 18px;
		line-height: 25px;
		font-family: 'Open Sans';
	}
`;
