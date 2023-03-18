import styled from 'styled-components';
import { TextField } from '@mui/material';
export const ContainerWrapp = styled.div`
	display: flex;
	justify-content: center;
	color: #000;
	font-size: 15px;
	line-height: 1.3;
	padding: 14px 26px;
	letter-spacing: 1px;
`;
export const FormWrapper = styled.div`
max-width:700px ;
text-align:center ;
& .error{
	color:red ;
}

`
export const CssTextField = styled(TextField)`
&&&{
margin-bottom:20px ;

}
`
export const Title = styled.h3`
	margin: 0;
	font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
	font-weight: 700;
	font-size: 22px;
	line-height: 33px;
	text-transform: uppercase;
	padding-top: 50px;

	
`;



