/* eslint-disable no-undef */
import styled from 'styled-components';
import { Button } from '@mui/material';

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	background-color: black;
`;
export const LoginWrapper = styled.div`
	min-width: 467px;
	margin-top: 168px;
	margin-bottom: 50px;
`;
export const HeadWrapp = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	& p {
		font-weight: 400;
		font-size: 18px;
		line-height: 18px;
		color: #e5e5e5;
		margin: 0;
		font-family: 'Josefin Sans';
	}
	& .login-wrapp {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 3px;
	}
	& hr {
		width: 223px;
		margin: 0;
		height: 1px;
		background-color: #737272;
		border: none;
		margin-top: 5px;
	}
`;
export const ButtonWrapp = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 107px;
`;
export const StyledButton = styled(Button)`
	&&& {
		background: #e5e5e5;
		color: #000000;
		font-weight: 400;
		font-size: 18px;
		line-height: 25px;
		font-family: 'Open Sans';
		width:100% ;
	}
`;

export const Description = styled.h2`
	color: white;
	font-weight: 400;
	font-size: 16px;
	line-height: 16px;
	margin-top: 73px;
	font-family: 'Josefin Sans';
`;
export const InputsWrapp = styled.div`
	margin-top: 71px;
	display: flex;
	flex-direction: column;
	gap: 44px;
`;
export const RadioWrapp = styled.div`
	margin-top: 55px;
	margin-left: -8px;
	display: flex;
	gap: 15px;
	& p {
		color: #847a7a;
		font-weight: 400;
		font-size: 12px;
		line-height: 16px;
	}
`;
