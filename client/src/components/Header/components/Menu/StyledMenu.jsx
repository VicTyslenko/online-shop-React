import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
&&&{
	margin-bottom: 40px;
		color: white;
		font-weight: 400;
		font-size: 18px;
		line-height: 25px;
		font-family: 'Open Sans', sans-serif;
		display:block ;
		cursor: pointer;
		text-decoration:none ;
}


`

export const MenuWrapp = styled.div`
	max-width: 650px;
	padding-left: 102px;
	padding-top: 87px;
	& .title {
		color: white;
		font-weight: 600;
		font-size: 20px;
		line-height: 27px;
		font-family: 'Open Sans', sans-serif;
		margin: 0;
		margin-bottom: 60px;
	}
`;
export const FlexWrapp = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 200px;
	& button {
		cursor: pointer;
		border: none;
		color: white;
		background-color: black;
		font-weight: 400;
		font-size: 18px;
		line-height: 25px;
		border-bottom: 1px solid white;
		margin-bottom: 30px;
	}
	& p {
		margin-bottom: 40px;
		color: white;
		font-weight: 400;
		font-size: 18px;
		line-height: 25px;
		font-family: 'Open Sans', sans-serif;
	}
	& .content,
	& .width {
		width: 205px;
	}
`;
