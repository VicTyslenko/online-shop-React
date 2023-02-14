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
	border-radius: 3px;
	transform: scale(1);
	transition: 0.5s;
	/* border: 1px solid #c7c6c6; */
`;

export const MainContent = styled.div`
	display: flex;
	justify-content: center;
`;

export const Title = styled.h1`
	color: #fff;
`;

export const Header = styled.h3`
	margin: 0;
	font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
	font-weight: 700;
	font-size: 22px;
	line-height: 33px;
	text-transform: uppercase;
	padding-top: 50px;
	padding-left: 80px;
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