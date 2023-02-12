import styled from 'styled-components';

export const ContainerWrapp = styled.div`
	display: flex;
	justify-content: center;
	color: #000;
	font-size: 15px;
	line-height: 1.3;
	padding: 14px 26px;
	letter-spacing: 1px;
`;

export const ContentForm = styled.div`
	margin: 40px 0 40px 0;
	z-index: 1;
	height: 100%;
	font-style: normal;
	background-color: #fff;
	width: 430px;
	border-radius: 8px;
	transform: scale(1);
	transition: 0.5s;
	box-shadow: 0 0 12px #000000;
`;

export const MainContent = styled.div`
	display: flex;
	justify-content: center;
`;

export const Title = styled.h1`
	color: #fff;
`;

export const Header = styled.header`
	padding: 16px 30px;
	position: relative;
	letter-spacing: 1px;
	word-spacing: 1px;
	font-size: 22px;
	font-weight: 700;
	border-bottom: 1px solid #d7d5d5;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #181818;
`;

export const ButtonWrap = styled.div`
	display: flex;
	justify-content: space-around;
	padding: 12px;
	border-top: 1px solid #d7d5d5;
`;

export const InputTitle = styled.div`
	letter-spacing: 0.5px;
	word-spacing: 1px;
	font-size: 17px;
	font-weight: 600;
	margin-bottom: 10px;
`;
