import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const ExpandedCardWrapper = styled.div`
	background: ${(props) => props.backGround};
	box-shadow: ${(props) => props.boxShadow};
	& .close-icon {
		fill: white;
		cursor: pointer;
	}
	position: absolute;
	width: 60%;
	height: 70vh;
	z-index: 9;
	left: 13rem;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	& span {
		color: white;
		font-size: 26px;
		font-weight: bold;
		text-shadow: 0 0 15px white;
	}
	& span:nth-of-type(2) {
		color: white;
		font-size: 16px;
	}
	& .chart-container {
		width: 70%;
		color: white;
	}
`;
