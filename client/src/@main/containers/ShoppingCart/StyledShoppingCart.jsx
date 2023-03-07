import styled from 'styled-components';
import { Button } from '@mui/material';
// eslint-disable-next-line import/prefer-default-export

export const ShoppingCartWrapp = styled.div`
	display: flex; 
	justify-content: space-between; 
`;

export const RemoveButton = styled(Button)`
	&&& {
		position: absolute;
		bottom: 36px;
		right: -48px;
		color: #847a7a;
		align-self: flex-end;
		font-weight: 400;
		font-size: 14px;
		line-height: 19px;
		font-family: 'Open Sans';
	}
`;

export const ContentWrapp = styled.div`
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
	padding: 0 0 2rem 0;

	& {
		border-bottom: 1px solid #c4c4c4;
		margin-bottom: 42px;
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
	& .qnt-btn {
		border: none;
		background: white;
		cursor: pointer;
		
	}
`;
