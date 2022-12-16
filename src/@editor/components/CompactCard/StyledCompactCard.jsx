import styled from "styled-components";

export const CardWrapper = styled.div`
	background: ${props => props.backGround};
	box-shadow: ${props => props.boxShadow};
	display: flex;
	flex: 1;
	height: 7rem !important;
	border-radius: 0.7rem;
	color: white;
	position: relative;
	cursor: pointer;
	padding: 1rem;

	&:hover {
		box-shadow: none;
	}
`
export const RadialBar = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	gap: 1rem;
`
export const Detail = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-end;

	& span:nth-child(2) {
		font-size: 22px;
		font-weight: bold;
	}

	& span:nth-child(3) {
		font-size: 12px;
	}

`
